class SearchController < ApplicationController

  def index
    @tvresults = GNAPI.findTVShow(params[:search])
    @tvparse = @tvresults["RESPONSES"]["RESPONSE"]["SERIES"].map{|series| Series.new(series)}

    # render json: Showparse.gracenote_showresponse(@tvresults).to_json
  end

  def detailshow
    @singleshow = GNAPI.fetchTVShow(params[:gn_id])
    @detailparse = Series.new(@singleshow["RESPONSES"]["RESPONSE"]["SERIES"])
  end

end
