var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "index.html"
        })
        .when("/red", {
            templateUrl : "about.html"
        })
        .when("/green", {
            templateUrl : "contact.html"
        })
        .when("/blue", {
            templateUrl : ""
        });
    });