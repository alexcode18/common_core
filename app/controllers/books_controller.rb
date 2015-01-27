class BooksController < ApplicationController
  
  def index
  	# @books = Book.limit(15)
    @books = Book.limit(15)
  	render json: @books.to_json(include: [:tags])
  end

  def get_more
    offset_by = params[:offset].to_i
    binding.pry
    if offset_by < Book.count - offset_by
      @books = Book.offset(offset_by).limit(15).order(:id)
    end
    render json: @books.to_json(include: [:tags]), status: 200
  end

  def show
    @book = Book.find(params[:id])
    render json: @book.to_json(include: [:tags])
  end

  

  # def create
  # 	@book = Book.create(book_params)
  # 	render json: @book.to_json(include: [:tags])
  # end

  # def update
  # 	@book = Book.update(params[:id], book_params)
  # 	render json: @book.to_json(include: [:tags])
  # end

  # def destroy
  # 	@book = Book.destroy(params[:id])
  # 	render json: @book
  # end

  private

  def book_params
  	params.require(:book).permit(:title,:author,:description,:isbn,:imprint,:copyright,:cover_price)
  end
end