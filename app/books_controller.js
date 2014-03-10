var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;

   $scope.addToCart = function(book) {
    $scope.books.push(book);
    $scope.book = {};
    }

  //Code to manage cart goes here
//    $scope.totalPrice = function(){
//         var total = 0;
//  for(count=0;count<$scope.items.length;count++){
//      total += $scope.books[count].Price*$scope.books[count].Quantity;
//  }
//  return total;
//     }
   
    $scope.removeBook = function(index){
        $scope.books.splice(index,1);
    }
// }


};
