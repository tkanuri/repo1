var bookApp = angular.module('bookApp', ['ngResource','ngRoute']);

bookApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'static/resources/components/search/book-list.html',   controller: 'BookListCtrl'});
}]);
