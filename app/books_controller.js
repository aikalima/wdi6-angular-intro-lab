var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

  // $scope.queryBy = function(selection){
  //   console.log(selection);
  // };
  $scope.items = [];
  $scope.total = 0;
  $scope.totalItems = 0;


  $scope.add = function(index){
    // // check if book is in cart
    // // if so, find item in cart and increase count
    // // elese create new cart_item with count 1 and push
    // cart_item = {
    //   book: books[index],
    //   count: 1
    // }
    // $scope.items.push(cart_item);

    $scope.totalItems += 1;
    books[index].count = books[index].count || 0;
    if(books[index].count===0){
      books[index].count = 1;
      $scope.items.push(books[index]);
    } else {
      books[index].count += 1;
    }
    $scope.total += books[index].price;

  };

  $scope.clear = function(){
    $scope.items = [];
    $scope.total = 0;
    $scope.totalItems = 0;

  };
  
  //Code to manage cart goes here


};
