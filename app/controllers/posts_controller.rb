class PostsController < ApplicationController
  
  def index
  	@posts = Post.all
  	render json: @posts.to_json(include: [:author, :tags])
  end

  def show
    @post = Post.find(params[:id])
    render json: @post.to_json(include: [:author, :tags])
  end

  def create
  	@post = Post.create(post_params)
  	render json: @post.to_json(include: [:author, :tags])
  end

  def update
  	@post = Post.update(params[:id], post_params)
  	render json: @post.to_json(include: [:author, :tags])
  end

  def destroy
  	@post = Post.destroy(params[:id])
  	render json: @post
  end

  private

  def post_params
  	params.require(:post).permit(:content, :title, :img_url, :author_id)
  end
end