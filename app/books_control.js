// Generated by CoffeeScript 1.7.1
var bookly;

bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  $scope.books = books;
  $scope.cartBooks = [];
  $scope.total = 0;
  $scope.count = 0;
  $scope.selects = ["author", "title", "price"];
  $scope.select = "title";
  $scope.addToCart = function(book) {
    if ($scope.cartBooks.indexOf(book) >= 0) {
      book.quantity += 1;
      $scope.total += book.price;
      $scope.count += 1;
    } else {
      book.quantity = 1;
      $scope.cartBooks.push(book);
      $scope.total += book.price;
      $scope.count += 1;
    }
  };
  return $scope.emptyCart = function() {
    $scope.cartBooks = [];
    $scope.count = 0;
    $scope.total = 0;
  };
};
