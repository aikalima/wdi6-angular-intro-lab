var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  //Code to manage cart goes here
  $scope.sortOptions = {
    selections: [
      {id : 1, name : 'Author' },      
      {id : 2, name : 'Title' },
      {id : 3, name : 'Price' },
    ]
  };

  $scope.cartItems = [];
  $scope.total = 0;
  $scope.cartCount = 0;
  var total = 0;

  $scope.add = function(index){
    if ($scope.cartItems.indexOf($scope.books[index]) === -1){
      $scope.cartItems.push($scope.books[index]);
      total += $scope.books[index].price;
      $scope.total = total.toFixed(2);
    }
    $scope.cartCount = $scope.cartItems.length;
  };

  $scope.empty = function(){
    $scope.cartItems.length = 0;
    $scope.total = 0;
    $scope.cartCount = 0;
  };
};
