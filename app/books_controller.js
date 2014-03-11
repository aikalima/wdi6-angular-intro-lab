var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.checkout = [];
  $scope.itemCount = 0;

  //Code to manage cart goes here
  $scope.add = function(index){
    var addedBook = $scope.books[index];
    
    if($scope.checkout.indexOf(addedBook) >= 0){
      $scope.checkout[$scope.checkout.indexOf(addedBook)].quantity += 1;
    } else {
      addedBook.quantity = 1;
      $scope.checkout.push(addedBook);
    }
    $scope.itemCount++;
  };

  $scope.total = function(){
    var moolah = 0;
    _.each($scope.checkout, function(element, index){
      moolah += element.price * element.quantity;
    });
    if(moolah === 0){
      return;
    }else {
      return moolah.toPrecision(4);
    }
  };

  $scope.empty = function(){
    $scope.checkout = [];
    $scope.itemCount = 0;
  };

};