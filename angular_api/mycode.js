var app = angular.module('myapp',[]);

app.controller('ctr',function($scope, $http){

    $http.get("http://localhost/AngularJS/angular_api/mydata.json").then(function(response){
        $scope.persons = response.data.records;
    });

});