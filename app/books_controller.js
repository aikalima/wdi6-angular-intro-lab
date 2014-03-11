var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  // $scope.categories = [
  // { id:1, sort: "Title", sortbyTitle: books.title},
  // { id:2, sort: "Author", sortbyAuthor: books.author},
  // { id:3, sort: "Price", sortbyPrice: books.price},
  // ];
  $scope.shoppingCart = [];
  $scope.addShop = function(item){
     $scope.shoppingCart.push(item);
  };

  $scope.total = function(){
    var total = 0;
    $scope.shoppingCart.forEach(function(x){
        total += x.price;
    });
    return total;
  };

  $scope.emptyCart = function(cart){
     $scope.shoppingCart.splice($scope.toRemove);
  };

  //Code to manage cart goes here

};

