var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.selects = ['author', 'title', 'price']
  $scope.select = 'title'

  //Code to manage cart goes here

};
