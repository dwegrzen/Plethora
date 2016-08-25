class SearchController < ApplicationController

  def index
    # tv show search through gracenote
    userinfo
    # @tvresults = GNAPI.findTVShow(params[:search])
    # @tvparse = []
    # unless @tvresults == "NO_MATCH"
    #   if singleshowresult(@tvresults)
    #     @tvparse = [showpath(@tvresults)].map{|series| Series.new(series)}
    #   else
    #     @tvparse = showpath(@tvresults).map{|series| Series.new(series)}
    #   end
    # end

    @tvresults = Tmdb::TV.find(params[:search])
    @tvparse = @tvresults.map{|show| Tmdbshow.new(show)}

    # # music album search through gracenote
    # @albumresults = GNAPI.findAlbum("",params[:search])
    # unless @albumresults == "NO_MATCH"
    #   if singleresult(@albumresults)
    #     @albumparse = [albumpath(@albumresults)].map{|album| Albumtemp.new(album)}
    #   else
    #     @albumparse = albumpath(@albumresults).map{|album| Albumtemp.new(album)}
    #   end
    # end

    # music artist search through gracenote
    @artistresults = DISCOGS.search(params[:search], per_page: 50, type: 'master', country: :us)
    @artistparse = @artistresults["results"].map{|album| Albumtemp.new(album)}


    # movie search through tmdb
    @movieresults = Tmdb::Movie.find(params[:search])
    @movieparse = @movieresults.map{|movie| Film.new(movie)}

    # render json: Showparse.gracenote_showresponse(@tvresults).to_json
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
  end

  def detailmusic
    @singlealbum = DISCOGS.get_master(params[:gn_id])
    @detailparse = Albumdetail.new(@singlealbum)
  end

  def detailmovie
    @singlemovie = Tmdb::Movie.detail(params[:tmdb_id])
    @detailparse = Filmdetail.new(@singlemovie)
  end


  private
    def singleshowresult(object)
      object["RESPONSES"]["RESPONSE"]["SERIES"].class == Hash
    end

    def singlealbumresult(object)
      object["RESPONSES"]["RESPONSE"]["ALBUM"].class == Hash
    end

    def showpath(object)
      object["RESPONSES"]["RESPONSE"]["SERIES"]
    end

    def albumpath(object)
      object["RESPONSES"]["RESPONSE"]["ALBUM"]
    end

    def tvresulttotal(object)
      result = object["RESPONSES"]["RESPONSE"]["RANGE"]["COUNT"].to_i
      if result > 100
        result = 100
      end
      result
    end

    def tvendrange(object)
      object["RESPONSES"]["RESPONSE"]["RANGE"]["END"].to_i
    end


end
