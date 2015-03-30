class BooksController < ApplicationController
  
  def index
  	# @books = Book.limit(15)
    @books = Book.all.order(title: :asc)
  	render json: @books.to_json(include: [:tags])
  end

<<<<<<< HEAD
  def get_more
    offset_by = params[:offset].to_i
    # if there's a tag param then find the next limit of tagged books
    if params[:tag]
      tag_books = Tag.find(params[:tag]).books
      @books = tag_books.offset(offset_by).limit(1).order(title: :asc)
    else
      puts '--- else route ---------------'
      @books = Book.offset(offset_by).limit(1).order(title: :asc) 
    end
    render json: @books.to_json(include: [:tags])
  end

  # 
  def tag_books
    @tag_books = Tag.find(params[:tag]).books.limit(50).order(title: :asc)
    render json: @tag_books.to_json(include: [:tags])
  end

  def show
    book = Book.find(params[:id])
    # tag_books = Tag.find(params[:tag]).books
    render json: book.to_json(include: [:tags])
=======
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
>>>>>>> 584c33e7348811fdd35e0f54a17cb2e374bda9ba
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