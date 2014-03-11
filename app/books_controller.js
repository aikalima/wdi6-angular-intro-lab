var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here

  
  $scope.cartItems =[];
  $scope.total = 0;
  $scope.cartCount = 0;
  //var total = 0;

  $scope.add = function(index){
    var book = _.find($scope.books, function(b) {
      return b.id === index;
    });
    
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
};
