class AlbumsController < ApplicationController

  def create
    @album = Album.new(show_params)
    if current_user.albums << @album
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroyalbum
    @stacking = Stacking.where(user_id: current_user.id)&.where(media_id: params[:album_id], media_type: "Album")
    @stacking.destroy_all
  end

  def albumcompletionstatus
    @stacking = Stacking.where(user_id: current_user.id)&.where(media_id: params[:album_id], media_type: "Album").first
    if params[:finished] == true
      @stacking.update(finished: true)
    else
      @stacking.update(finished: false)
    end
  end

  private
    def show_params
      params.permit(:name, :genre, :album_art, :tracks, :artist, :date, :gn_id)
    end



end
