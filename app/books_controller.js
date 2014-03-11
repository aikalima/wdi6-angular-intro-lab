var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  
  $scope.selects = ['author', 'title', 'price'];
  $scope.select = 'title';
  $scope.cartBooks = [];
  $scope.orderTotal = 0;
  $scope.cartItemCount = $scope.cartBooks.length;



  //Code to manage cart goes here
	$scope.addToCart = function (id) {
		var book = _.find(books, function(b) {
			return b.id === id;
		});
		$scope.cartBooks.push(book);
		$scope.orderTotal += book.price;
		$scope.cartItemCount = $scope.cartBooks.length;

	};

	$scope.emptyCart = function() {
		$scope.cartBooks = [];
		$scope.cartItemCount = $scope.cartBooks.length;
		$scope.orderTotal = 0;
	};

};
