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
        .when('/billsystem1', {
            templateUrl: 'billsystem/biilsystemm.html',
        })
        .when('/billsystem2', {
            templateUrl: 'billsystem/billsystem__.html',
        })
        .when('/billsystem3', {
            templateUrl: 'billsystem/billsystem_.html',
            controller: 'myctr'
        })
        .when('/billsystem4', {
            templateUrl: 'billsystem/billsystem.html',
        })
        .when('/Classwork', {
            templateUrl: 'Classwork/Assignment.html',
        })
        .when('/Classwork_', {
            templateUrl: 'Classwork/sir.html',
        })
        .when('/AngularStore', {
            templateUrl: 'AngularStore/index.html',
        })
        .when('/Dynamic_Web', {
            templateUrl: 'Dynamic_Web/index.html',
        })
        .when('/Filter', {
            templateUrl: 'Filter/filter.html',
        })
        .when('/Filter_asg', {
            templateUrl: 'Filter/filter_assignment.html',
        })
        .when('/Filter2', {
            templateUrl: 'filter2/filter.html',
        })
        .when('/LastClass', {
            templateUrl: 'LastClass/Assignment.html',
        })
        .when('/LastClass_', {
            templateUrl: 'LastClass/mvc01.html',
        })
        .when('/Marksheet_ang', {
            templateUrl: 'Marksheet_ang/Marksheet_ang.html',
        })
        .when('/Marksheet_ang2', {
            templateUrl: 'Marksheet_ang/Marksheet_ang2.html',
        })
        // new folder missing
        .when('/onclick', {
            templateUrl: 'onclick/index.html',
        })
        .when('/onclick_', {
            templateUrl: 'onclick/somecode.html',
        })
        .when('/Sir_works', {
            templateUrl: 'Sir_works/sir.html',
        })
        .when('/Sir_works2', {
            templateUrl: 'Sir_works/sir2.html',
        })
        .when('/Switch', {
            templateUrl: 'Switch/bonus_assignment.html',
        })
        .when('/Switch_', {
            templateUrl: 'Switch/ng-search.html',
        })
        .when('/wordcount', {
            templateUrl: 'wordcount/index.html',
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// ngRoute about.html file code
app.controller('myctr', function ($scope) {
    $scope.x = 10;
});

// Billsystem 3 controller
app.controller('myctr2', function ($scope) {
    $scope.name = '';
    $scope.price = 0;
    $scope.qty = 0;
    $scope.discount = 0;
    $scope.otcharges = 0;

    // calculate the initial bill
    $scope.fbill = function() {
        return $scope.price * $scope.qty;
    };

    // calculate the net final bill after discount
    $scope.nfbill = function() {
        return $scope.fbill() - ($scope.fbill() * ($scope.discount / 100));
    };

    // calculate the final bill with additional charges
    $scope.yourbill = function() {
        return $scope.nfbill() + $scope.otcharges;
    };
});


