bookly = bookly or {}

bookly.bookApp = angular.module "bookApp",[]

bookly.BooksController = ($scope) ->
  $scope.books = books
  $scope.itmes = []
  $scope.total = 0
  $scope.totalItems = 0

  $scope.add = () ->
    $scope.totalItems += 1
    @book.count = @book.count or 0
    if @book.count is 0
      $scope.items.push @book
    @book.count += 1
    $scope.total += @book.price
    return


  $scope.clear = () ->
    item=0 for items in $scope.items
    item.count = 0
    $scope.items = []
    $scope.total = 0
    $scope.totalItems = 0
    return
  return



