var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cart = {
        books: [{
            qty: '1',
            title: '',
            author: '',
            price: ''}]
    };
  $scope.count = 0;
  $scope.total = 0;


  //add a book to the shopping cart
  $scope.addItemToCart = function(book) {
    $scope.cart.books.push(book);
    };

  //total number of items in the cart
  $scope.cartCount = function() {
    var count = 0;
    angular.forEach($scope.cart.books, function(book) {
    count += book;
    });
    return count;
  };


  //clear the entire cart
  $scope.clearCart = function() {
    $scope.cart.books = [];
  };

  //total price of all items in the cart
  $scope.totalPrice = function(){
    var total = 0;
    for(count=0; count < $scope.cart.length; count++){
    total += $scope.cart.books.price;
    }
 return total;
    };



};















    
