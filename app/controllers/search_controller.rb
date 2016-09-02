class SearchController < ApplicationController
  before_action :set_page


  def index
    userinfo
    @artistparse = []
    @movieparse = []
    @tvparse = []
    type = params[:searchtype]
    case type
      when "All"
        # tv show search through tmdb
        @tvresults = Tmdb::TV.find(params[:search])
        @tvparse = @tvresults.map{|show| Tmdbshow.new(show)}

        # music artist search through discogs
        @artistresults = DISCOGS.search(params[:search], per_page: 50, type: 'master', country: :us)
        @artistparse = @artistresults["results"].map{|album| Albumtemp.new(album)}

        # movie search through tmdb
        @movieresults = Tmdb::Movie.find(params[:search])
        @movieparse = @movieresults.map{|movie| Film.new(movie)}
      when "TV"
        @tvresults = Tmdb::TV.find(params[:search])
        @tvparse = @tvresults.map{|show| Tmdbshow.new(show)}
      when "Movie"
        @movieresults = Tmdb::Movie.find(params[:search])
        @movieparse = @movieresults.map{|movie| Film.new(movie)}
      when "Music"
        @paginate = true
        @artistresults = DISCOGS.search(params[:search], page: params[:page], per_page: 12, type: 'master')
        @artistparse = @artistresults["results"].map{|album| Albumtemp.new(album)}
        @pages = @artistresults["pagination"]["pages"]
        @currentpage = params[:page]
      else
    end
  end

  def detailshow
    @singleshow = Tmdb::TV.detail(params[:gn_id])
    @detailparse = Tmdbshowdetail.new(@singleshow)
    if current_user.shows.find_by(gn_id: params[:gn_id])
      @queued = true
      @showid = current_user.shows.find_by(gn_id: params[:gn_id]).id
      @finished = current_user.stackings.find_by(media_id: @showid, media_type: "Show").finished
    else
      @queued = false
      @finished = false
      @showid = @detailparse.gn_id
    end
  end

  def detailmusic
    @singlealbum = DISCOGS.get_master(params[:gn_id])
    @detailparse = Albumdetail.new(@singlealbum)
    if current_user.albums.find_by(gn_id: params[:gn_id])
      @queued = true
      @albumid = current_user.albums.find_by(gn_id: params[:gn_id]).id
      @finished = current_user.stackings.find_by(media_id: @albumid, media_type: "Album").finished
    else
      @queued = false
      @finished = false
      @albumid = @detailparse.gn_id
    end
  end

  def detailmovie
    @singlemovie = Tmdb::Movie.detail(params[:tmdb_id])
    @detailparse = Filmdetail.new(@singlemovie)
    if current_user.movies.find_by(tmdb_id: params[:tmdb_id])
      @queued = true
      @movieid = current_user.movies.find_by(tmdb_id: params[:tmdb_id]).id
      @finished = current_user.stackings.find_by(media_id: @movieid, media_type: "Movie").finished
    else
      @queued = false
      @finished = false
      @movieid = @detailparse.tmdb_id
    end
  end

  def checkdetail
    media_id = params[:media_id]
    detail = params[:media_type]
    case detail
      when "Movie"
        redirect_to detailmovie_path(tmdb_id: media_id)
      when "Album"
        redirect_to detailalbum_path(gn_id: media_id)
      when "Show"
        redirect_to detailshow_path(gn_id: media_id)
      else
    end

  end

  private
  def set_page
    unless params[:page]
      params[:page]= 1
    end
  end


end
