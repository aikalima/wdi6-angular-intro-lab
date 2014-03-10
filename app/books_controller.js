var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cartItems = [];
  

  $scope.add = function(index) {
    $scope.book = $scope.books[index]
    $scope.cartItems.push($scope.book)
  }
 

};
