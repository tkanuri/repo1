bookApp.controller('BookListCtrl', function ($scope, BookService) {
    $scope.searchTerm = "jQuery";

    $scope.doSearch = function () {
        BookService.get({ q: $scope.searchTerm }, function (response) {

            $scope.bookResults = response.items;
            //$scope.orderProp = 'volumeInfo.title';
		$scope.orderProp = 'volumeInfo.publishedDate';


            
        });
    }
});