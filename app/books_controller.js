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

    if ($scope.cart.indexOf($scope.books[index]) >= 0) {
      $scope.cart[$scope.cart.indexOf($scope.books[index])].count += 1;
    } else {
      $scope.cart.push($scope.books[index]);
      $scope.cart[$scope.cart.indexOf($scope.books[index])].count = 1;
    }
  };

  $scope.total = function() {
    var total = 0.0;
    for (var i = 0; i < $scope.cart.length; i++) {
      total += ($scope.cart[i].price) * ($scope.cart[i].count);
    }
    return total;
  };

  $scope.quantity = function() {
    var quantity = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      quantity += $scope.cart[i].count;
    };
    return quantity;
  };

  $scope.clearCart = function() {
    $scope.cart = [];
  }

  $scope.search = function() {
    console.log("key pressed");
  };
};