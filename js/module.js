var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'card.html',
        })
        .when('/about', {
            templateUrl: 'ngRoute/about.html',
            controller: 'myctr'
        })
        .when('/contact', {
            templateUrl: 'ngRoute/contact.html',
        })
        .when('/api', {
            templateUrl: 'angular_api/index.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


app.controller('myctr', function ($scope) {
    $scope.x = 10;
});
