var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.items = [];
  $scope.total = 0;
  $scope.totalItems = 0;


  $scope.add = function(){

    $scope.totalItems += 1;
    this.book.count = this.book.count || 0;
    if(this.book.count===0){
      $scope.items.push(this.book);
    } 
    this.book.count += 1;
    $scope.total += this.book.price;
    console.log("scope ", $scope);
    console.log("this ", this);

  };

  $scope.clear = function(){
    for(var i=0; i<$scope.items.length; i++){
      $scope.items[i].count = 0;
    }
    $scope.items = [];
    $scope.total = 0;
    $scope.totalItems = 0;
  };
  
  //Code to manage cart goes here


};
