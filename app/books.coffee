bookly = bookly or {}

bookly.bookApp = angular.module("bookApp",[])

bookly.BooksController = ($scope) ->
  $scope.books = books
  $scope.itmes = []
  $scope.total = 0
  $scope.totalItems = 0

  $scope.add = () ->
    $scope.totalItems += 1
    this.book.count = this.book.count or 0
    if this.book.count is 0
      $scope.items.push this.book

    this.book.count += 1
    $scope.total += this.book.price


