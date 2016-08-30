class PasswordResetsController < ApplicationController

  def new
  end

  def edit
    @user = User.find_by_password_reset_token!(params[:id])
  end

  def create
    user = User.find_by_email(params[:user][:email])
    user.send_password_reset if user
    redirect_to root_path, notice: "Email sent with password reset instructions."
  end

  def update
    @user = User.find_by_password_reset_token!(params[:id])
    @user.password_digest = ""
    if @user.password_reset_sent_at < 2.hours.ago
      redirect_to new_password_reset_path, notice: "Password reset token has expired, request another password reset."
    elsif @user.password_reset_status == true
      redirect_to new_password_reset_path, notice: "Password has already been changed, request another password reset."
    elsif @user.update_attributes(user_params)
      @user.update(password_reset_status: true)
      redirect_to root_path, notice: "Password has been reset."
    else
      render :edit
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end


end
