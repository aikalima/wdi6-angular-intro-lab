var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  $scope.queryBy = function(selection){
    console.log(selection);
  };

  $scope.add = function(index){
    console.log(index);
    $scope.items.push(books[index]);
    // $scope.priceList.push(books[index].price);
    
  };

  $scope.total = function(){
    var sum = 0;
    for(var i=0; i<$scope.item.length; i++){
      sum += $scope.item[i].price;
    }
    return sum;
  };

  $scope.items = [];
  //Code to manage cart goes here


};
