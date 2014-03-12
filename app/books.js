// Generated by CoffeeScript 1.7.1
var bookly;

bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  $scope.books = books;
  $scope.cartItems = [];
  $scope.cartCount = 0;
  $scope.add = function(book) {
    if ($scope.cartItems.indexOf(book) >= 0) {
      book.quantity += 1;
    } else {
      book.quantity = 1;
      $scope.cartItems.push(book);
    }
    $scope.cartCount += 1;
  };
  $scope.empty = function() {
    $scope.cartItems.length = 0;
    $scope.total = 0;
    $scope.cartCount = 0;
  };
  $scope.removeItem = function(item) {
    console.log(item);
    console.log("index q before");
    console.log(item.quantity);
    $scope.cartItems.splice(item, 1);
    console.log("cart c before");
    console.log($scope.cartCount);
    $scope.cartCount -= item.quantity;
    console.log("scope c after");
    console.log($scope.cartCount);
    item.quantity = 0;
    console.log("index q after");
    console.log(item.quantity);
  };
  $scope.total = function() {
    var total;
    total = 0;
    _.each($scope.cartItems, function(item) {
      total += item.quantity * item.price;
    });
    return total;
  };
};
