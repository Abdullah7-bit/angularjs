var app = angular.module('myapp', []);
app.controller('myctr', function($scope){
      $scope.x;
      $scope.y;

      $scope.emp = [
          { 'id':101, 'name' : 'ali', 'city':'karachi' },
          { 'id':102, 'name' : 'zeeshan', 'city':'lahore' },
          { 'id':103, 'name' : 'ghafoor', 'city':'multan' },
          { 'id':104, 'name' : 'usman', 'city':'pindi' }
      ];
});