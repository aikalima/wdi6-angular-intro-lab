var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.options = ['author', 'title', 'price'];
  $scope.cartItems = [];
  $scope.count = 0;

 

  //add a book to the shopping cart
  $scope.addItemsToCart = function(index) {
    var addAnotherItem = $scope.books[index];    
     if($scope.cartItems.indexOf(addAnotherItem) >= 0){
       $scope.cartItems[$scope.cartItems.indexOf(addAnotherItem)].quantity += 1;
     } else {
      addAnotherItem.quantity = 1;
       $scope.cartItems.push(addAnotherItem);
     }
     $scope.count++;
   };

  $scope.removeItem = function(index){
    $scope.cartItems.splice(index,1);
  };

  //clear the entire cart
  $scope.clearCart = function() {
    $scope.cartItems = [];
    $scope.count = 0;

  };

  $scope.total = function(){
    var total = 0;
    _.each($scope.cartItems, function(item){
     total += item.quantity * item.price;
    });
     return total;

  };

};