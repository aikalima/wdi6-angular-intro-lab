var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  $scope.cart = [];
  $scope.itemCount = 0;



   $scope.addToCart = function(book) {
    var addedBook = $scope.books[book];
    if($scope.cart.indexOf(addedBook) >= 0){
 $scope.cart[$scope.cart.indexOf(addedBook)].quantity += 1;
 } else {
  addedBook.quantity = 1;
    $scope.cart.push(addedBook);
  }
  $scope.itemCount++;
  };
};
    


  //     $scope.add = function(index){
  //   var addedBook = $scope.books[index];
    
  //   if($scope.checkout.indexOf(addedBook) >= 0){
  //     $scope.checkout[$scope.checkout.indexOf(addedBook)].quantity += 1;
  //   } else {
  //     addedBook.quantity = 1;
  //     $scope.checkout.push(addedBook);
  //   }
  //   $scope.itemCount++;
  // };

  //Code to manage cart goes here
//    $scope.totalPrice = function(){
//         var total = 0;
//  for(count=0;count<$scope.items.length;count++){
//      total += $scope.books[count].Price*$scope.books[count].Quantity;
//  }
//  return total;
//     }
   
//     $scope.removeBook = function(index){
//         cart_item === 0;
//     }
// // }

