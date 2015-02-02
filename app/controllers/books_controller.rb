class BooksController < ApplicationController
  
  def index
    @books = Book.limit(30).order(title: :asc)
  	render json: @books.to_json(include: [:tags])
  end

  def get_more
    offset_by = params[:offset].to_i
    if params[:tag]
      puts '-----if route----------------'
      tagBooks = Tag.find(params[:tag]).books
      @books = tagBooks.offset(offset_by).limit(30).order(title: :asc)
    else
      puts '--- else route ---------------'
      @books = Book.offset(offset_by).limit(30).order(title: :asc) 
    end
    render json: @books.to_json(include: [:tags])
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