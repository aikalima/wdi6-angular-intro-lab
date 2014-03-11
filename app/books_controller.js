var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here

  
  $scope.cartItems =[];
  $scope.total = 0;
  $scope.cartCount = 0;

  $scope.add = function(book){
    if ($scope.cartItems.indexOf(book) === -1){
      book.quantity = 1;
      $scope.cartItems.push(book);
      // total += $scope.books[index].price;
      // $scope.total = total.toFixed(2);
      $scope.total += book.price;
      $scope.cartCount += 1;
    } else {
      book.quantity += 1;
      $scope.total += book.price;
      $scope.cartCount += 1;
    }
  };

  $scope.empty = function(){
    $scope.cartItems.length = 0;
    $scope.total = 0;
    $scope.cartCount = 0;
  };

  $scope.removeItem = function(index){
    $scope.cartItems.splice(index, 1);
    $scope.total -= (index.price * index.quantity);
    $scope.cartCount -= index.quantity;
    console.log($scope.cartCount);
    index.quantity = 0;
    console.log(index.quantity);
  };
};
