var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  // $scope is like @ in ruby => instance variable
  
  $scope.books = books;

  var count = 1;

  $scope.addToCart = function (aBook) {
    // increments
    $scope.count = count++;

    // adds books to array
    $scope.booksArray = $scope.booksArray || [];
    $scope.booksArray.push(aBook);

    // calculates total
    var total = 0;  
    for (var i = 0; i < booksArray.length; i++) {
      v = parseFloat(booksArray[i].price);
      total +=v;
      $scope.total = total;
    }
  };

  $scope.checkout = function () {
   $scope.booksArray = [];
   $scope.count = null;
   count = 1; 
   $scope.total = null;
   total = null;
  };





};

// modules are like large functions