class TagsController < ApplicationController
  
  def index
  	@tags = Tag.all
  	render json: @tags.to_json(include: [:posts])
  end

  def show
    @tag = Tag.find(params[:id])
    render json: @post.to_json(include: [:posts])
  end

  def create
  	@tag = Tag.create(tag_params)
  	render json: @tag.to_json(include: [:posts])
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
