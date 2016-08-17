class SearchController < ApplicationController

  def index
    @tvresults = GNAPI.findTVShow(params[:search])
    @tvparse = @tvresults["RESPONSES"]["RESPONSE"]["SERIES"].map{|series| Series.new(series)}

    # render json: Showparse.gracenote_showresponse(@tvresults).to_json
  end

end
