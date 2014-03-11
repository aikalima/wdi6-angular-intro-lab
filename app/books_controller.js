var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
    $scope.books = books;
    $scope.ordering = 'title';
    $scope.addItem = function(index){
      console.log(index);
    };

    $scope.addItemToCart = function(index) {
        var cart_item = {book: books[index]};
        $scope.cart.push(cart_item);
    };

    $scope.cart = [];

    $scope.emptyCart = function() {
        var remove = $scope.cart.splice(0, $scope.cart.length);
    };

    $scope.updateTotal = function() {
        var total = 0.0;
        var length = $scope.cart.length;
        for(var i = 0; i < length; i++) {
            total += $scope.cart[i].book.price;
        }
        return total;
    };
};
