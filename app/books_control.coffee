bookly = bookly or {}

bookly.bookApp = angular.module("bookApp", [])

bookly.BooksController = ($scope) ->
	$scope.books = books
	
	$scope.selects = ['author', 'title', 'price']
	$scope.select = 'title'
	$scope.cartBooks = []
	$scope.orderTotal = 0
	$scope.cartItemCount = 0
	
	$scope.addToCart = (book) ->
		if ($scope.cartBooks.indexOf(book) >= 0)
			$scope.cartBooks[$scope.cartBooks.indexOf(book)].quantity += 1
			$scope.orderTotal += book.price
			$scope.cartItemCount += 1
			return
		else
			book.quantity += 1
			$scope.cartBooks.push(book)
			$scope.orderTotal += book.price
			$scope.cartItemCount += 1
			return
		
	$scope.emptyCart = ->
		$scope.cartBooks = []
		$scope.cartItemCount = 0
		$scope.orderTotal = 0
		return

s