var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  $scope.total = 0;
  // $scope.cart_to_display = _.uniq($scope.cart);


  // code without quantity column
  $scope.add = function(book) {
    $scope.cart.push(book);
    $scope.cart = _.uniq($scope.cart);
    if (($scope.cart.length === 1) || ($scope.in_cart(book) === false)) {
      $scope.total += book.price;
    }
    // $scope.cart_qty[book.id] += 1;
  };


  $scope.count = function(book) {
    var num = 0;
    for (var i = 0; i < $scope.cart.length; i++) {
      if (_.isEqual($scope.cart[i], book)) {
        num += 1;
      }
    }
    return num;
  };

  $scope.in_cart = function(book) {
    for (var ele in books) {
      if (_.isEqual(ele, book)) {
        return true;
      }
      return false;
    }
  };

  // $scope.calculate_total = function(array) {
  //   var a = 0;
  //   for (var i = 0; i < $scope.cart.length; i++) {
  //     var array = $scope.cart;
  //     a += (array[i].price);
  //   }
  //   return a;
  // };


  $scope.remove = function() {
    $scope.cart.splice(0, ($scope.cart.length));
    $scope.total = 0;
  };



};