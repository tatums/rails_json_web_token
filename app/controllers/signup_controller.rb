class SignupController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render :json => @user.to_json
    else
      render :json => { :errors => @user.errors }, status: 422
    end
  end

  def confirm
    @user = User.confirm_by_token(user_params[:confirmation_token])
    if @user.errors.empty?
      render :json => @user.to_json
    else
      render :json => { :errors => @user.errors }, status: 422
    end
  end

  private

    def user_params
      params.require(:user).permit(:email,
                                   :password,
                                   :password_confirmation,
                                   :confirmation_token)
    end
end
