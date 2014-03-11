var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  // $scope is like @ in ruby => instance variable
  
  $scope.books = books;

  var count = 0;

  $scope.addToCart = function (aBook) {
    $scope.count = count++;
    $scope.author = aBook.author;
    $scope.title = aBook.title;
    $scope.price = aBook.price;
  };
};

// modules are like large functions