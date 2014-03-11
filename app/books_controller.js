var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.cart = [];

  $scope.total = 0;
  $scope.cartCount = 0;
  $scope.addToCart = function(index){
    books[index].count = books[index].count || 0;
    if ($scope.cart.indexOf(books[index])>=0){
    books[index].count = books[index].count + 1;
    } else {
       $scope.cart.push(books[index]);
    books[index].count = books[index].count + 1;
    }
    $scope.total += books[index].price;
    $scope.cartCount += 1;
  };

  $scope.checkout = function(books){
    $scope.cart.splice(books);
  };

  $scope.removeAll = function(books){
    $scope.cart.splice(books);
    $scope.total=0;
    $scope.cartCount=0;
    for (var i=0; i < $scope.books.length; i++){
      $scope.books[i].count = 0;
    }

  };

  //Code to manage cart goes here

};
