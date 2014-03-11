bookly = bookly or {};
bookly.bookApp = angular.module("bookApp", [])

bookly.CoffeeController = ($scope) ->
  $scope.books = books
  $scope.cart = []
  $scope.itemCount = 0


  $scope.addToCart = (index) ->
    addedBook = $scope.books[index]
    $scope.cart.push(addedBook)
    $scope.itemCount++
    undefined

  $scope.total = () ->
    total = 0.0
    angular.forEach($scope.cart, (item, key) ->
      total += item.price)
    total
    

  $scope.emptyCart = (index) ->
    $scope.cart = []
    $scope.itemCount = 0

  undefined
