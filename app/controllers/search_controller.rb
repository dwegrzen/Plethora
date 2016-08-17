class SearchController < ApplicationController

  def index
    @tvresults = GNAPI.findTVShow(params[:search])

    render json: Showparse.gracenote_showresponse(@tvresults)
  end

end
