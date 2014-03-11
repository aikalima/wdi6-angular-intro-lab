var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.checkout = [];
  $scope.itemCount = 0;

  //Code to manage cart goes here
  $scope.add = function(index){
    if($scope.checkout[$scope.books[index]]){
      console.log('found');
    } else { 
    $scope.checkout.push($scope.books[index]);
    $scope.itemCount++;
    }
  };

  $scope.empty = function(){
    $scope.checkout = [];
    $scope.itemCount = 0;
  };

};
