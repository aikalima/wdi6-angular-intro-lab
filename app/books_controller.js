var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cart = [];

  //Code to manage cart goes here
  // $scope.delete = function(aBook) {
  //   var index = $scope.books.indexOf(aBook);
  //   $scope.books.splice(index,1);
  // }

  $scope.add = function(book){
    $scope.cart.push(book);
  }

  $scope.updateCart = function(cart){
    var total = 0;
    _.each(cart, function(book){
      total = total + book.price;
    });
    return total;
  };

  $scope.emptyCart = function(cart){
    $scope.cart = [];
  }

  $scope.count = function(cart, book_id){
    return _.where(cart, {id: book_id}).length;
  }

};
