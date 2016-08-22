class SearchController < ApplicationController
  before_action :userinfo

  def index
    # tv show search through gracenote
    @tvresults = GNAPI.findTVShow(params[:search])
    unless @tvresults == "NO_MATCH"
      if singleresult(@tvresults)
        @tvparse = [showpath(@tvresults)].map{|series| Series.new(series)}
      else
        @tvparse = showpath(@tvresults).map{|series| Series.new(series)}
      end
    end

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
    @artistresults = GNAPI.findArtist(params[:search])
    unless @artistresults == "NO_MATCH"
      if singleresult(@artistresults)
        @artistparse = [albumpath(@artistresults)].map{|album| Albumtemp.new(album)}
      else
        @artistparse = albumpath(@artistresults).map{|album| Albumtemp.new(album)}
      end
    end


    # render json: Showparse.gracenote_showresponse(@tvresults).to_json
  end

  def indexpaginated
    # tv show search through gracenote
    @tvresults = GNAPI.findTVShow(params[:search])
    unless @tvresults == "NO_MATCH"
      @totaltv = tvresulttotal(@tvresults)
      if @totaltv > tvendrange(@tvresults)
        @next = 



      @nextvalue = tvendrange(@tvresults)
        if singleresult(@tvresults)
          @tvparse = [showpath(@tvresults)].map{|series| Series.new(series)}
        else
          @tvparse = showpath(@tvresults).map{|series| Series.new(series)}
        end
    end

    # music album search through gracenote
    @albumresults = GNAPI.findAlbum("",params[:search])
    unless @albumresults == "NO_MATCH"
      if singleresult(@albumresults)
        @albumparse = [albumpath(@albumresults)].map{|album| Albumtemp.new(album)}
      else
        @albumparse = albumpath(@albumresults).map{|album| Albumtemp.new(album)}
      end
    end

    # music artist search through gracenote
    @artistresults = GNAPI.findArtist(params[:search])
    unless @artistresults == "NO_MATCH"
      if singleresult(@artistresults)
        @artistparse = [albumpath(@artistresults)].map{|album| Albumtemp.new(album)}
      else
        @artistparse = albumpath(@artistresults).map{|album| Albumtemp.new(album)}
      end
    end


    # render json: Showparse.gracenote_showresponse(@tvresults).to_json
  end


  def detailshow
    @singleshow = GNAPI.fetchTVShow(params[:gn_id])
    @detailparse = Series.new(showpath(@singleshow))
  end

  def detailmusic
    @singlealbum = GNAPI.fetchOETData(params[:gn_id])
    @detailparse = Albumtemp.new(albumpath(@singlealbum))
  end


  private
    def singleresult(object)
      object["RESPONSES"]["RESPONSE"]["SERIES"].class == Hash
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



    def userinfo
      @userqueuedshows = current_user.shows.pluck(:gn_id)
      finishedshows = current_user.stackings.where(finished: true).pluck(:media_id)
      @userfinishedshows = current_user.shows.find(finishedshows).pluck(:gn_id)
    end



end
