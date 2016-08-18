class SearchController < ApplicationController

  def index
    begin
      @tvresults = GNAPI.findTVShow(params[:search])
      rescue RuntimeError
      @tvresults = {result: "No TV search results."}                   
    end
    @tvparse = @tvresults["RESPONSES"]["RESPONSE"]["SERIES"].map{|series| Series.new(series)} unless @tvresults == {result: "No TV search results."}


    # render json: Showparse.gracenote_showresponse(@tvresults).to_json


  end

  def detailshow
    @singleshow = GNAPI.fetchTVShow(params[:gn_id])
    @detailparse = Series.new(@singleshow["RESPONSES"]["RESPONSE"]["SERIES"])
  end

end
