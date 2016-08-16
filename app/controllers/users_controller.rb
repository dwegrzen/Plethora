class UsersController < ApplicationController
before_action :require_user, except: [:index, :login, :new, :create]

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

  def logout
    session[:email] = nil
    respond_to do |format|
      format.html { redirect_to :root , notice: 'Successfully logged out.'}
    end
  end


  def create
    @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        session[:email] = @user.email
        format.html { redirect_to root_path , notice: 'User was successfully created.' }
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
