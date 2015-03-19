class BooksController < ApplicationController
  
  def index
  	# @books = Book.limit(15)
    @books = Book.all.order(title: :asc)
  	render json: @books.to_json(include: [:tags])
  end

  # def get_more
  #   offset_by = params[:offset].to_i
  #   if offset_by < Book.count - offset_by
  #     @books = Book.offset(offset_by).limit(30).order(title: :asc)
  #     render json: @books.to_json(include: [:tags])
  #   end
  #   puts 'done'
  # end

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