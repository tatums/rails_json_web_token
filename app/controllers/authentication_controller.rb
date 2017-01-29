class AuthenticationController < ApplicationController

  def authenticate_user
    @user = User.find_for_database_authentication(email: params[:email])
    if @user && @user.valid_password?(params[:password])
      render json: { auth_token: auth_token }
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
  end

  private

    def auth_token
      expiration = Time.current + 2.days
      JsonWebToken.encode({ user_id: @user.id, expiration: expiration })
    end

end
