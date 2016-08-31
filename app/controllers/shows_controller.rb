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
    if params[:gn_id]
      @show = Show.find_by(gn_id: params[:gn_id]).id
      @stacking = Stacking.where(user_id: current_user.id, media_id: @show, media_type: "Show")
      @stacking.destroy_all
    elsif (params[:show_id] && params[:show_id] != "undefined")
      @stacking = Stacking.where(user_id: current_user.id, media_id: params[:show_id], media_type: "Show")
      @stacking.destroy_all
    end
  end

  def showcompletionstatus
    if params[:gn_id]
      @show = Show.find_by(gn_id: params[:gn_id]).id
      @stacking = Stacking.where(user_id: current_user.id, media_id: @show, media_type: "Show")
      if params[:finished] == true
        @stacking.update_all(finished: true)
      else
        @stacking.update_all(finished: false)
      end
    else
      @stacking = Stacking.where(user_id: current_user.id, media_id: params[:show_id], media_type: "Show")
      if params[:finished] == true
        @stacking.update_all(finished: true)
      else
        @stacking.update_all(finished: false)
      end
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
