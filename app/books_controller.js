var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.cart = [];

  // Add a selected book to cart
  $scope.addBookToCart = function(book) {
    var bookIndex = $scope.cart.indexOf(book);

    // if book not in cart yet, add it, else increase quantity
    if (bookIndex === -1) {
      book.quantity = 1;
      $scope.cart.push(book);
    }
    else {
      $scope.cart[bookIndex].quantity++;
    }
  };

  // empty the cart
  $scope.emptyCart = function(cart) {
    while ($scope.cart.length > 0) {
      $scope.cart.pop();
    }
  };

  // set default sort to book title
  $scope.bookSort = 'title';

  $scope.cartTotal = function() {
    var sum = 0;
    _.each($scope.cart, function(book) { sum += (book.price*book.quantity); });
    return sum;
  };
};
