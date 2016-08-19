class SearchController < ApplicationController

  def index
    begin
      @tvresults = GNAPI.findTVShow(params[:search])
      rescue RuntimeError
      @tvresults = {result: "No TV search results."}
    end
    if singleresult(@tvresults)
      @tvparse = [@tvresults["RESPONSES"]["RESPONSE"]["SERIES"]].map{|series| Series.new(series)} unless @tvresults == {result: "No TV search results."}
    else
      @tvparse = @tvresults["RESPONSES"]["RESPONSE"]["SERIES"].map{|series| Series.new(series)} unless @tvresults == {result: "No TV search results."}
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

end
