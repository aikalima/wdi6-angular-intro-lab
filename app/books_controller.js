var bookly = bookly || {};

bookly.bookApp = angular.module("bookApp", []);

bookly.BooksController = function($scope) {
  // load books. They are defined in data.js (we've got no back end yet!)
  $scope.books = books;
  
  $scope.selects = ['author', 'title', 'price'];
  $scope.select = 'title';
  $scope.cartBooks = [];
  $scope.orderTotal = 0;
  $scope.cartItemCount = 0;



  //Code to manage cart goes here
	$scope.addToCart = function (book) {
		if ($scope.cartBooks.indexOf(book) >= 0) {
			$scope.cartBooks[$scope.cartBooks.indexOf(book)].quantity += 1;
			$scope.orderTotal += book.price;
			$scope.cartItemCount += 1;
		}
		else {
			book.quantity += 1;
			$scope.cartBooks.push(book);
			$scope.orderTotal += book.price;
			$scope.cartItemCount += 1;
		}

	};

	$scope.emptyCart = function() {
		$scope.cartBooks = [];
		$scope.cartItemCount = 0;
		$scope.orderTotal = 0;
	};

};
