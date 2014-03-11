var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  //begin empty array
  $scope.cart = [];
  //add new book to cart array
  $scope.addToCart = function(item) {
    $scope.cart.push(item);
  };

};