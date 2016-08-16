class UsersController < ApplicationController
before_action :require_user, except: [:index, :login, :new]

  def index
    if current_user
      @usershows = current_user.shows
      @useralbums = current_user.albums
      render :index
    else
      render :landing
    end
  end

  # GET /users/new
  def new
    @user = User.new
    render :sign_up
  end

  def login
    @user
    render :login
  end

  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to @user, notice: 'User was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end


end
