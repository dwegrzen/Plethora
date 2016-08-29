class ShowsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_user

  def index
    @shows = current_user.shows
    userinfo
    render :index
  end

  def create
    @show = Show.find_or_create_by(gn_id: params[:gn_id])
    @show.update(show_params)
    if current_user.shows << @show
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroyshow
    @stacking = Stacking.where(user_id: current_user.id, media_id: params[:show_id], media_type: "Show")
    @stacking.destroy_all
  end

  def showcompletionstatus
    @stacking = Stacking.where(user_id: current_user.id, media_id: params[:show_id], media_type: "Show")
    if params[:finished] == true
      @stacking.update_all(finished: true)
    else
      @stacking.update_all(finished: false)
    end
  end

  def showaddasfinished
    @show = Show.find_or_create_by(gn_id: params[:show][:gn_id])
    @show.update(showfinished_params)
    if current_user.shows << @show
      render json: @user, status: :created
    else
      render json: @show.errors, status: :unprocessable_entity
    end
    @stacking = Stacking.where(user_id: current_user.id, media_id: @show.id, media_type: "Show")
    if params[:finished] == true
      @stacking.update_all(finished: true)
    else
      @stacking.update_all(finished: false)
    end
  end



 private
   def show_params
     params.permit(:title, :genre, :show_image, :synopsis, :seasons, :date, :gn_id)
   end

   def showfinished_params
     params.require(:show).permit(:title, :genre, :show_image, :synopsis, :seasons, :date, :gn_id)
   end

end
