class AlbumsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :require_user

  def index
    @albums = current_user.albums
    userinfo
    render :index
  end

  def create
    @album = Album.find_or_create_by(gn_id: params[:gn_id])
    @album.update(album_params)
    if current_user.albums << @album
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroyalbum
    if params[:gn_id]
      @album = Album.find_by(gn_id: params[:gn_id]).id
      @stacking = Stacking.where(user_id: current_user.id, media_id: @album, media_type: "Album")
      @stacking.destroy_all
    elsif (params[:album_id] && params[:album_id] != "undefined")
      @stacking = Stacking.where(user_id: current_user.id, media_id: params[:album_id], media_type: "Album")
      @stacking.destroy_all
    end
  end

  def albumcompletionstatus
    if params[:gn_id]
      @album = Album.find_by(gn_id: params[:gn_id]).id
      @stacking = Stacking.where(user_id: current_user.id, media_id: @album, media_type: "Album")
      if params[:finished] == true
        @stacking.update_all(finished: true)
      else
        @stacking.update_all(finished: false)
      end
    else
      @stacking = Stacking.where(user_id: current_user.id, media_id: params[:album_id], media_type: "Album")
      if params[:finished] == true
        @stacking.update_all(finished: true)
      else
        @stacking.update_all(finished: false)
      end
    end
  end

  def albumaddasfinished
    @album = Album.find_or_create_by(gn_id: params[:music][:gn_id])
    @album.update(albumfinished_params)
    if current_user.albums << @album
      render json: @user, status: :created
    else
      render json: @show.errors, status: :unprocessable_entity
    end
    @stacking = Stacking.where(user_id: current_user.id, media_id: @album.id, media_type: "Album")
    if params[:finished] == true
      @stacking.update_all(finished: true)
    else
      @stacking.update_all(finished: false)
    end
  end


  private
    def album_params
      params.permit(:name, :genre, :album_art, :tracks, :artist, :date, :gn_id)
    end

    def albumfinished_params
      params.require(:music).permit(:name, :genre, :album_art, :tracks, :artist, :date, :gn_id)
    end



end
