var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.items = [];
  $scope.total = 0;
  $scope.totalItems = 0;


  $scope.add = function(index){

    $scope.totalItems += 1;
    books[index].count = books[index].count || 0;
    if(books[index].count===0){
      $scope.items.push(books[index]);
      books[index].count = 1;
    } else {
      books[index].count += 1;
    }
    $scope.total += books[index].price;
    // console.log($scope.items);
    // console.log(books[index].count);

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
