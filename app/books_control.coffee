
bookly = bookly or {}
bookly.bookApp = angular.module("bookApp", [])

bookly.BooksController = ($scope) ->
  @books = books
  @cartBooks = []
  @total = 0
  @count = 0
  @selects = ["author", "title", "price"]
  @select = "title"

  $scope.addToCart = (book) ->
 
    if ($scope.cartBooks.indexOf(book) >= 0)
      book.quantity += 1
      @total += book.price
      @count += 1
      return

    else
      book.quantity = 1
      @cartBooks.push(book)
      @total += book.price
      @count += 1
      return

  $scope.emptyCart = ->
    @cartBooks = []
    @count = 0
    @total = 0
    return