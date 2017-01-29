class MyAccountController < ApplicationController
  before_action :authenticate_request!

  def show
    render json: @current_user
  end

  def change_password
    if @current_user.update_with_password(user_params)
      render json: @current_user
    else
      render :json => { :errors => @current_user.errors }, status: 422
    end
  end

  private

    def user_params
      params.require(:user).permit(:current_password, :password, :password_confirmation)
    end
end
