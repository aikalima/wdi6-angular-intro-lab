var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cart = [];
  $scope.addToCart = function(book){
    $scope.cart.push(book);
  };

  $scope.cartTotal = function(cart){
    var total = 0;
    _.each(cart, function(book){
      total = total + book.price;
    });
    return total;
  };

  $scope.emptyCart = function(cart){
    $scope.cart = [];
  };

  $scope.quantify = function(cart, book_id){
    return _.where(cart, {id: book_id}).length;
  }

};
