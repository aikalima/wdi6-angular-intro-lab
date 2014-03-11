var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  $scope.pushToCart = function(index){
    console.log($scope.books[index]);
    console.log($scope.cart.indexOf($scope.books[index]));
    console.log($scope.cart);
    // if (!$scope.cart.indexOf($scope.books[index]) > 0) {
      $scope.cart.push($scope.books[index]);
    // }
  };
};