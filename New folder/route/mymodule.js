var app = angular.module('myapp', []);
app.controller('myctr', function($scope){

      $scope.dat = [
          { 'pid':101, 'product': 'Mobile_1', 'category': 'Electronics' , 'seller' : 'Ali', 'location':'Karachi' },
          { 'pid':102, 'product': 'Mobile_2', 'category': 'Electronics' , 'seller' : 'Usman', 'location':'Karachi' },
          { 'pid':103, 'product': 'Mobile_3', 'category': 'Electronics' , 'seller' : 'Ghafoor', 'location':'Rawalpindi' },
          { 'pid':104, 'product': 'Car_1', 'category': 'Automobile' , 'seller' : 'Usman', 'location':'Lahore' },
          { 'pid':105, 'product': 'Car_2', 'category': 'Automobile' , 'seller' : 'Ghafoor', 'location':'Rawalpindi' },
          { 'pid':106, 'product': 'Car_3', 'category': 'Automobile' , 'seller' : 'Zeeshan', 'location':'Karachi' },
          { 'pid':107, 'product': 'Flower_1', 'category': 'Decoration' , 'seller' : 'Ali', 'location':'Multan' },
          { 'pid':108, 'product': 'Flower_2', 'category': 'Decoration' , 'seller' : 'Ghafoor', 'location':'Rawalpindi' },
          { 'pid':109, 'product': 'Flower_3', 'category': 'Decoration' , 'seller' : 'Usman', 'location':'Lahore' },

      ];
});

var App = angular.module("myApp", ["ngRoute"]);
app.controller('myCtr',function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/ng-repeat", {
        templateUrl : "ng-repeat.html"
    })
    .when("/pricing", {
        templateUrl : "pricing.html"
    });
});