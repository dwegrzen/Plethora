class ShowsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_user

  def create
    @show = Show.new(show_params)
    if current_user.shows << @show
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroyshow
    @stacking = Stacking.where(user_id: current_user.id)&.where(media_id: params[:show_id], media_type: "Show")
    @stacking.destroy_all
  end

  def showcompletionstatus
    @stacking = Stacking.where(user_id: current_user.id)&.where(media_id: params[:show_id], media_type: "Show").first
    if params[:finished] == true
      @stacking.update(finished: true)
    else
      @stacking.update(finished: false)
    end
  end




 private
   def show_params
     params.permit(:title, :genre, :show_image, :synopsis, :seasons, :date, :gn_id)
   end

end
