class ShowsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_user

  def index
    @show = current_user.shows
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
    @stacking = Stacking.where(user_id: current_user.id, media_id: params[:show_id], media_type: "Show").first
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

end
