var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", [
    //'ngRoute', 'bookly.BooksController']);

    //bookly.bookApp.config(['$routeProvider',
    //function
]);

bookly.BooksController = function($scope) {
    // load books. They are defined in data.js (we've got no back end yet!)
    $scope.books = books;
    $scope.orderProp = 'title';
    $scope.cart = [];
    $scope.itemCount = 0;

    //Code to manage cart goes here
    $scope.addBook = function(index) {
        var orderBook = $scope.books[index];

        $scope.cart.push(orderBook);
        $scope.itemCount++;

    };
    $scope.emptyCart = function(index) {
        $scope.cart = [];
        $scope.itemCount = 0;
     
    };
    $scope.orderTotal = function() {
        for (var i = 0; i < $scope.cart.length; i++) {
            tempPrice = 0;
            tempPrice += $scope.cart[i].price;
            i++;
            console.log($scope.cart[i]);
        }
        return this;
    };

};