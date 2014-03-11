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
    if (arrayContains(this.shoppingCart, item)){
      $scope.shoppingCartItems += 1;
      var update = this.shoppingCart.indexOf(item);
      $scope.shoppingCart[update].quantity += 1;
    } else {
      $scope.shoppingCartItems += 1;
      this.shoppingCart.push(item);
      var newItem = this.shoppingCart.indexOf(item);
      $scope.shoppingCart[newItem].quantity = 1;
      console.log(this.shoppingCart); 
    }
      
  };

  $scope.shoppingCartItems = 0;

  function arrayContains(arr,element){
    if(arr !== null && arr.length >0){
        for(var i=0;i<arr.length;i++){
            if(arr[i] == element)
                return true;
        }
    }
    return false;
 } 

  $scope.total = function(){
    var total = 0;
    $scope.shoppingCart.forEach(function(x){
      var amount = x.quantity * x.price;
        total += amount;
    });
    return total;
  };

  $scope.emptyCart = function(cart){
     $scope.shoppingCartItems = 0;
     $scope.shoppingCart.splice($scope.toRemove);
  };

  //Code to manage cart goes here

};

