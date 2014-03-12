bookly = {} unless bookly?

bookly.bookApp = angular.module "bookApp",[]

bookly.BooksController = ($scope) ->
  $scope.books = books
  $scope.cart = []
  $scope.total = 0
  $scope.cartCount = 0
  
  $scope.addToCart ->
    this.book.count = this.book.count or 0
    unless $scope.cart.indexOf this.book >= 0
      $scope.cart.push this.book
    this.book.count += 1
    $scope.total += this.book.price
    $scope.cartCount += 1
    this
    
  $scope.checkout (books) -> 
    $scope.cart.splice books
    return 
  
  $scope.removeAll (books) -> 
    $scope.cart.splice books
    $scope.total = 0
    $scope.cartCount = 0
    book.count=0 for books in $scope.books
    