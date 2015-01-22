class TagsController < ApplicationController
  
  def index
  	@tags = Tag.all
  	render json: @tags
  end

  def create
  	@tag = Tag.create(tag_params)
  	render json: @tag
  end

  def update
  	@tag = Tag.update(params[:id], tag_params)
  	render json: @tag
  end

  def destroy
  	@tag = Tag.destroy(params[:id])
  	render json: @tag
  end

  private

  def tag_params
  	params.require(:tag).permit(:name)
  end
end
