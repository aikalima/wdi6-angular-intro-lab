bookly = bookly or {}
bookly.bookApp = angular.module "bookApp", []

bookly.NewController = ($scope) ->
  
  # load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books
  $scope.orderProperty = "title"
  $scope.cart = []

  $scope.addToCart = (aBook) ->
    #Add book only if not already in cart
    $scope.cart.push aBook  if $scope.cart.indexOf(aBook) is -1

  $scope.clearCart = ->
    $scope.cart = []

  $scope.cartTotal = ->
    total = 0.0
    angular.forEach $scope.cart, (item, key) ->
      total += item.price

    total

