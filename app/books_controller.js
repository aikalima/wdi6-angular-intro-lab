var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cartBooks = [];
  $scope.total = 0;
  $scope.count = 0;

  $scope.selects = ['author', 'title', 'price'];
  $scope.select = 'title';


  //Code to manage cart goes here
  $scope.addCart = function(id){

    var book = _.find(books, function(b){
      return b.id === id;
    });

    if ($scope.cartBooks.indexOf(book) >= 0){
      book.quantity += 1;
      $scope.total += book.price;
      $scope.count += 1;
    } else {
      book.quantity = 1;
      $scope.cartBooks.push(book);
      $scope.total += book.price;
      $scope.count += 1;
    }

  };

  $scope.emptyCart = function(){
    $scope.cartBooks = [];
    $scope.count = 0;
    $scope.total = 0;
  };

};
