var app = angular.module('myapp',[]);

app.controller('ctr',function(){

    $http.get("http://localhost/AngularJS/angular_task/mydata.json").then(function(response){
        $scope.persons = response.data.records;
    });

});