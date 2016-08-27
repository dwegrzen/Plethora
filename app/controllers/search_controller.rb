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
        # tv show search through gracenote
        @tvresults = Tmdb::TV.find(params[:search])
        @tvparse = @tvresults.map{|show| Tmdbshow.new(show)}

        # music artist search through gracenote
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
    # render json: Showparse.gracenote_showresponse(@tvresults).to_json
  end

  def indexgit
    client = Octokit::Client.new(:access_token => ENV["octokit_token"])
    @logins = client.search_users("location:indianapolis language:ruby sort:joined-asc",page: params[:page])
    @pages = (@logins[:total_count]/30.0).ceil
    @userdata = @logins[:items].map{|x| client.user(x.login)}
  end

  # def indexpaginated
  #   # tv show search through gracenote
  #   @tvresults = GNAPI.findTVShow(params[:search])
  #   unless @tvresults == "NO_MATCH"
  #     @totaltv = tvresulttotal(@tvresults)
  #     if @totaltv > tvendrange(@tvresults)
  #       @next =
  #
  #   end
  #
  #     @nextvalue = tvendrange(@tvresults)
  #       if singleresult(@tvresults)
  #         @tvparse = [showpath(@tvresults)].map{|series| Series.new(series)}
  #       else
  #         @tvparse = showpath(@tvresults).map{|series| Series.new(series)}
  #       end
  #   end
  #
  #   # music album search through gracenote
  #   @albumresults = GNAPI.findAlbum("",params[:search])
  #   unless @albumresults == "NO_MATCH"
  #     if singleresult(@albumresults)
  #       @albumparse = [albumpath(@albumresults)].map{|album| Albumtemp.new(album)}
  #     else
  #       @albumparse = albumpath(@albumresults).map{|album| Albumtemp.new(album)}
  #     end
  #   end
  #
  #   # music artist search through gracenote
  #   @artistresults = GNAPI.findArtist(params[:search])
  #   unless @artistresults == "NO_MATCH"
  #     if singleresult(@artistresults)
  #       @artistparse = [albumpath(@artistresults)].map{|album| Albumtemp.new(album)}
  #     else
  #       @artistparse = albumpath(@artistresults).map{|album| Albumtemp.new(album)}
  #     end
  #   end
  #
  #
  #   # render json: Showparse.gracenote_showresponse(@tvresults).to_json
  # end


  def detailshow
    @singleshow = Tmdb::TV.detail(params[:gn_id])
    @detailparse = Tmdbshowdetail.new(@singleshow)
    if current_user.shows.find_by(gn_id: params[:gn_id])
      @queued = true
      @showid = current_user.shows.find_by(gn_id: params[:gn_id]).id
      @finished = current_user.stackings.find_by(media_id: @showid, media_type: "Show").finished
    else
      @queued = false
      @finished = nil
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
      @finished = nil
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
      @finished = nil
    end

  end


  private
  def set_page
    unless params[:page]
      params[:page]= 1
    end
  end


end
