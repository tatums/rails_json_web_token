class ApplicationController < ActionController::API
  respond_to :json
  attr_reader :current_user

  protected

  def authenticate_request!
    unless current_user
      render json: { errors: ['Not Authenticated'] }, status: :unauthorized
    end
  rescue JWT::VerificationError, JWT::DecodeError
    render json: { errors: ['Not Authenticated'] }, status: :unauthorized
  end

  private


  def current_user
    @current_user ||= User.find(auth_token[:user_id])
  end

  def auth_token
    @auth_token ||= if request.headers['Authorization'].present?
                      raw_token = request.headers['Authorization'].split(' ').last
                      JsonWebToken.decode(raw_token)
                    end
  end

  def user_id_in_token?
    auth_token && auth_token[:user_id].present?
  end
end
