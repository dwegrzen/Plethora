class SearchController < ApplicationController

  def index
    @tvresults = GNAPI.findTVShow(params[:search])
    unless @tvresults == "NO_MATCH"
      if singleresult(@tvresults)
        @tvparse = [objectpath(@tvresults)].map{|series| Series.new(series)}
      else
        @tvparse = objectpath(@tvresults).map{|series| Series.new(series)}
      end
    end
    # render json: Showparse.gracenote_showresponse(@tvresults).to_json
  end

  def detailshow
    @singleshow = GNAPI.fetchTVShow(params[:gn_id])
    @detailparse = Series.new(@singleshow["RESPONSES"]["RESPONSE"]["SERIES"])
  end


  private
    def singleresult(object)
      object["RESPONSES"]["RESPONSE"]["SERIES"].class == Hash
    end

    def objectpath(object)
      object["RESPONSES"]["RESPONSE"]["SERIES"]
    end


end
