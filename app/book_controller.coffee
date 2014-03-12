bookly = bookly or {}

bookly.bookApp = angular.module("bookApp", [])

bookly.BooksController = ($scope) ->
  
  $scope.books = books
  $scope.cartBooks = []
  $scope.total = $scope.count = 0
  $scope.selects = ['author' 
                    'title' 
                    'price']
  $scope.select = "title"

  $scope.addCart = (book) ->
    if $scope.cartBooks.indexOf(book) >= 0
      book.quantity += 1
    else
      book.quantity = 1
      $scope.cartBooks.push book 
    
    $scope.total += book.price
    $scope.count += 1
    return

  $scope.emptyCart = ->
    $scope.cartBooks = []
    $scope.count = $scope.total = 0
    return

  return
