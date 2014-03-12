bookly = bookly or {}

bookly.bookApp = angular.module 'bookApp', []

bookly.BooksController = ($scope) -> 

  $scope.books = books
  $scope.checkout = []
  $scope.itemCount = 0

  $scope.add = (index) ->
    addedBook = $scope.books[index]

    if $scope.checkout.indexOf(addedBook) >= 0
      $scope.checkout[$scope.checkout.indexOf(addedBook)].quantity += 1
    else
      addedBook.quantity = 1
      $scope.checkout.push addedBook

    $scope.itemCount++

  $scope.total = ->
    moolah = 0
    for item in $scope.checkout
      moolah += item.price * item.quantity;
    
  
    moolah;

  $scope.empty = ->
    $scope.checkout = []
    $scope.itemCount = 0
