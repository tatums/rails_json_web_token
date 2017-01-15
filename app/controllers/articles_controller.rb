class ArticlesController < ApplicationController
  before_action :authenticate_request!

  def index
    render json: Article.all
  end
end
