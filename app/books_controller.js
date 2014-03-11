var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  $scope.total = 0;
  // $scope.cart_to_display = _.uniq($scope.cart);


  // I create an array called cart_qty of length (books.length + 1), each element at index i is the number of books
  // with id i. Each value is 0.
  var cart_qty = [];

  for (var i = 1; i <= books.length; i++) {
    cart_qty[i] = 0;
  }


  // code without quantity column
  $scope.add = function(book) {
    $scope.cart.push(book);


    $scope.cart = _.uniq($scope.cart);
    if (($scope.cart.length === 1) || (in_cart(book) === false)) {
      $scope.total += book.price;
    }
    $scope.cart_qty[book.id] += 1;
  };


  $scope.count = function count(book) {
    var num = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      if (_.isEqual($scope.cart[i], book)) {
        num += 1;
      }
    }
    return num;
  };

  var in_cart = function(book) {
    for (var ele in books) {
      if (_.isEqual(ele, book)) {
        return true;
      }
      return false;
    }
  };

  $scope.calculate_total = function() {
    var a = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      a += (array[i].price);
    }
    return a;
  };


  $scope.remove = function() {
    $scope.cart.splice(0, ($scope.cart.length));
    $scope.total = 0;
  };



};