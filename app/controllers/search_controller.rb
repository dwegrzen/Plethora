class SearchController < ApplicationController

  def index
    @tvresults = GNAPI.findTVShow(params[:search])

  end
  
end
