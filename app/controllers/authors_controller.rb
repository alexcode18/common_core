class AuthorsController < ApplicationController

  def index
  	@authors = Author.all
  	render json: @authors
  end

  def create
  	@author = Author.create(author_params)
  	render json: @author
  end

  def update
  	@author = Author.update(params[:id], author_params)
  	render json: @author
  end

  def destroy
  	@author = Author.destroy(params[:id])
  	render json: @author
  end

  private

  def author_params
  	params.require(:author).permit(:username, :img_url, :bio, :location, :password_digest)
  end
end