class SearchController < ApplicationController

  def index
    @tvresults = GNAPI.findTVShow(params[:search])
    @albumresults = GNAPI.find

  end
end
