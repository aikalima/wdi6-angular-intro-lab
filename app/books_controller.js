var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.orderProp = 'title';
  
  //Code to manage cart goes here
  $scope.cartContents = [];

  $scope.addToCart = function(book) {
    $scope.cartContents.push(book);
  };

  $scope.itemCount = function() {
    return $scope.cartContents.length;
  };

  $scope.totalCost = function() {
    var cost = 0;
    $scope.cartContents.forEach(function(el) {
      cost = cost + el.price;
      });
    return cost;
  };

  $scope.emptyCart = function() {
    $scope.cartContents.length = 0;
  };

};
