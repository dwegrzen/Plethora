class AlbumsController < ApplicationController

  def create
    @show = Album.new(show_params)
    if current_user.shows << @show
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroyalbum
    @stacking = Stacking.where(user_id: current_user.id)&.where(media_id: params[:show_id], media_type: "Album")
    @stacking.destroy_all
  end

  def albumcompletionstatus
    @stacking = Stacking.where(user_id: current_user.id)&.where(media_id: params[:show_id]).first
    if params[:finished] == true
      @stacking.update(finished: true)
    else
      @stacking.update(finished: false)
    end
  end

  private
    def show_params
      params.permit(:name, :genre, :album_art, :synopsis, :seasons, :date, :gn_id)
    end



end
