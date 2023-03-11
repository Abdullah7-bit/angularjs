var app = angular.module('mystore',[]);
app.controller('myctr',function($scope){
    //    $scope.a = 10;
    $scope.prodata = [
        {'itemcode':4201, "title":"Women Maroon Top", "Category":"Clothes", "Price":4000, "Qty" : 40, "images": "assets/images/shop-1.jpg"},
        {"itemcode":4202, "title":"Heel", "Category":"Shoes", "Price":2000, "Qty" : 10 , "images": "assets/images/bg3.jpg"}
    ];

});