var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  $scope.addToCart = function(index){
    var cart = $scope.cart;
    var books = $scope.books[index];
    if (cart.indexOf(books) >= 0) {
      cart[cart.indexOf(books)].count += 1;
    } 
    else {
      cart.push(books);
      cart[cart.indexOf(books)].count = 1;
    }
  };

  $scope.removeFromCart = function(index) {
    $scope.cart.splice(index,1);
  }

  $scope.clearCart = function() {
    $scope.cart = [];
  }

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

  $scope.sortByCategory = function(category) {
    function compare(a,b) {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1
      }
      return 0;
    }
    return $scope.books.sort(compare);
  }


};