var bookly;

if (typeof bookly === "undefined" || bookly === null) {
  bookly = {};
}

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  $scope.books = books;
  $scope.cart = [];
  $scope.total = 0;
  $scope.cartCount = 0;
  $scope.addToCart(function() {
    this.book.count = this.book.count || 0;
    if (!$scope.cart.indexOf(this.book >= 0)) {
      $scope.cart.push(this.book);
    }
    this.book.count += 1;
    $scope.total += this.book.price;
    $scope.cartCount += 1;
    return this;
  });
  $scope.checkout(function(books) {
    $scope.cart.splice(books);
  });
  return $scope.removeAll(function(books) {
    var _i, _len, _ref, _results;
    $scope.cart.splice(books);
    $scope.total = 0;
    $scope.cartCount = 0;
    _ref = $scope.books;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      books = _ref[_i];
      _results.push(book.count = 0);
    }
    return _results;
  });
};