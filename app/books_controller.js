var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cart = [];
  $scope.itemCount = 0;

   $scope.addToCart = function(index) {
    var addedBook = $scope.books[index];
    $scope.cart.push(addedBook);
    $scope.itemCount ++;
  };

  $scope.total = function() {
    var total = 0.0;
    angular.forEach($scope.cart, function(item, key){
      total += item.price;
    });
    return total;
  }
   
    $scope.emptyCart = function(index){
      $scope.cart = [];
      $scope.itemCount = 0;
    }

};













