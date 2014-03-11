bookly = bookly or {}

bookly.bookApp = angular.module "bookApp", [] 

bookly.BooksController = ($scope) ->
  $scope.books = books
  $scope.options = ['author', 'title', 'price']
  $scope.cartItems = []
  $scope.count = 0


  $scope.addItemsToCart = (index) ->
      addAnotherItem = $scope.books[index] 
      if($scope.cartItems.indexOf(addAnotherItem) >= 0)
         $scope.cartItems[$scope.cartItems.indexOf(addAnotherItem)].quantity += 1
        else 
          addAnotherItem.quantity = 1;
          $scope.cartItems.push(addAnotherItem)
         $scope.count++
       

    $scope.removeItemFromCart = (index) ->
        $scope.cartItems.splice(index) 
        $scope.count = 0
        return

   $scope.clearCart = () ->
      $scope.cartItems = []
      $scope.count = 0
      return

   $scope.total = () ->
      total = 0
      _.each($scope.cartItems, (item) ->
        total += item.quantity * item.price;
        return
        )
      return total;
    return
