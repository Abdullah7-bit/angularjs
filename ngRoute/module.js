var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
            template: '<h1>default</h1>',
        })
        .when('/about', {
            templateUrl: 'about.html',
            controller: 'myctr'
        })
        .when('/contact', {
            templateUrl: 'contact.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


app.controller('myctr', function ($scope) {
    $scope.x = 10;
});
