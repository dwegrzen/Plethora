class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def require_user
    redirect_back(fallback_location: root_path, flash: {danger: "Please login or register."}) unless current_user
  end


  def current_user
    if session[:email]
     @current_user ||= User.find_by(email: session[:email])
    #  @showsample = Show.all.sample.show_image
    end
    @current_user
  end

  def userinfo
    if current_user
      @userqueuedshows = current_user.shows.pluck(:gn_id)
      @userqueuedmusic = current_user.albums.pluck(:gn_id)
      @userqueuedmovies = current_user.movies.pluck(:tmdb_id)
      finishedshows = current_user.stackings.where(finished: true, media_type: "Show").pluck(:media_id)
      finishedmusic = current_user.stackings.where(finished: true, media_type: "Album").pluck(:media_id)
      finishedmovies = current_user.stackings.where(finished: true, media_type: "Movie").pluck(:media_id)
      @userfinishedshows = current_user.shows.find(finishedshows).pluck(:gn_id)
      @userfinishedmusic = current_user.albums.find(finishedmusic).pluck(:gn_id)
      @userfinishedmovies = current_user.movies.find(finishedmovies).pluck(:tmdb_id)
      @userid = current_user.id
    end


  end


end
