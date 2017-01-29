class PasswordResetController < ApplicationController

  def create
    @user = User.find_by(email: user_params[:email])
    @token = @user.send_reset_password_instructions if @user
    render :json => {success: true, token: @token}
  end

  def update
    @user = User.reset_password_by_token(user_params)
    if @user.valid?
      render json: @user
    else
      render :json => { :errors => @user.errors }, status: 422
    end
  end

  private
    def user_params
      params.require(:user).permit(:email, :reset_password_token, :password, :password_confirmation)
    end
end
