bookly = bookly or {}

bookly.bookApp = angular.module("bookApp", [])

bookly.BooksController = ($scope) ->
  
  $scope.books = books
  $scope.cartBooks = []
  $scope.total = 0
  $scope.count = 0
  $scope.selects = ['author', 'title', 'price']
  $scope.select = "title"

  $scope.addCart = (book) ->
    if @cartBooks.indexOf(book) >= 0
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

  return
