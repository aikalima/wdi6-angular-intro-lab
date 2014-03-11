var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  $scope.total = 0;
  $scope.num_items = 0;

  //quantity is an array that stores the number of books in the chart by its place in the indes. for ex
  //if book.id is four and there are 3 in the array, then quantity[4] is 3
  $scope.quantity = [];
  $scope.num_books_in_cart = 0;


  $scope.add = function(book) {
    $scope.num_books_in_cart += 1;
    $scope.cart.push(book);
    $scope.cart = _.uniq($scope.cart);
    $scope.total += book.price;
    var id = book.id;
    if ($scope.quantity[id] === undefined) {
      $scope.quantity[id] = 1;
    } else {
      $scope.quantity[id] += 1;
    }
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

  // $scope.in_cart = function(book) {
  //   for (var ele in books) {
  //     if (_.isEqual(ele, book)) {
  //       return true;
  //     }
  //     return false;
  //   }
  // };


  $scope.remove = function() {
    $scope.cart.splice(0, ($scope.cart.length));
    $scope.total = 0;
    $scope.quantity = [];
  };



};