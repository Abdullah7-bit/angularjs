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
            controller: 'apictr'
        })
        .when('/billsystem', {
            templateUrl: 'billsystem/billsystem.html',
        })
        .when('/ngmodel_show', {
            templateUrl: 'ngmodel_show/ngmodel_show.html',
            controller: 'msctr'
        })
        .when('/Filter', {
            templateUrl: 'Filter/filter.html',
            controller: 'filactr'
        })
        .when('/ngRepeat', {
            templateUrl: 'ngRepeat/ngRepeat.html',
            controller: 'mvctr1'
        })
        .when('/Marksheet', {
            templateUrl: 'Marksheet/Marksheet.html',
            controller: 'markctr'
        })
        .when('/Switch1', {
            templateUrl: 'Switch/switch1.html',
        })
        .when('/Switch2', {
            templateUrl: 'Switch/switch2.html',
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
    $scope.fbill = function () {
        return $scope.price * $scope.qty;
    };

    // calculate the net final bill after discount
    $scope.nfbill = function () {
        return $scope.fbill() - ($scope.fbill() * ($scope.discount / 100));
    };

    // calculate the final bill with additional charges
    $scope.yourbill = function () {
        return $scope.nfbill() + $scope.otcharges;
    };
});

// controller for local api
app.controller('apictr', function ($scope, $http) {

    $http.get("http://localhost/angularjs/public/angular_api/mydata.json").then(function (response) {
        $scope.persons = response.data.records;
    });


});

// controller for ngmodel_show
app.controller('msctr', function ($scope) {
    $scope.x;
    $scope.y;

    $scope.myfunctionx = function () {
        $scope.x = true;
        $scope.y = false;
    };
    $scope.myfunctiony = function () {
        $scope.y = true;
        $scope.x = false;
    }

    // hide / show  
    $scope.z = false;
});

//Filter File Controller
app.controller('filactr', function ($scope) {
    $scope.data = [{
        'id': 101,
        'name': 'ali',
        'profile': 'https://source.unsplash.com/300x200/?random',
        'city': 'karachi'
    },
    {
        'id': 102,
        'name': 'usman',
        'profile': 'https://source.unsplash.com/300x200/?nature,water',
        'city': 'lahore'
    },
    {
        'id': 103,
        'name': 'zeeshan',
        'profile': 'https://source.unsplash.com/300x200/?technology',
        'city': 'islamabad'
    },
    {
        'id': 104,
        'name': 'ahmed',
        'profile': 'https://source.unsplash.com/300x200/?textures-patterns',
        'city': 'karachi'
    },
    {
        'id': 105,
        'name': 'usama',
        'profile': 'https://source.unsplash.com/300x200/?textures-patterns',
        'city': 'lahore'
    }, {
        'id': 106,
        'name': 'furqan',
        'profile': 'https://source.unsplash.com/300x200/?textures-patterns',
        'city': 'islamabad'
    }
    ];
});

// MVC Controller
app.controller('mvctr1', function ($scope) {
    $scope.category = 'Category';
    $scope.dat = [
        { 'pid': 101, 'product': 'Mobile_1', 'category': 'Electronics', 'seller': 'Ali', 'location': 'Karachi' },
        { 'pid': 102, 'product': 'Mobile_2', 'category': 'Electronics', 'seller': 'Usman', 'location': 'Karachi' },
        { 'pid': 103, 'product': 'Mobile_3', 'category': 'Electronics', 'seller': 'Ghafoor', 'location': 'Rawalpindi' },
        { 'pid': 104, 'product': 'Car_1', 'category': 'Automobile', 'seller': 'Usman', 'location': 'Lahore' },
        { 'pid': 105, 'product': 'Car_2', 'category': 'Automobile', 'seller': 'Ghafoor', 'location': 'Rawalpindi' },
        { 'pid': 106, 'product': 'Car_3', 'category': 'Automobile', 'seller': 'Zeeshan', 'location': 'Karachi' },
        { 'pid': 107, 'product': 'Flower_1', 'category': 'Decoration', 'seller': 'Ali', 'location': 'Multan' },
        { 'pid': 108, 'product': 'Flower_2', 'category': 'Decoration', 'seller': 'Ghafoor', 'location': 'Rawalpindi' },
        { 'pid': 109, 'product': 'Flower_3', 'category': 'Decoration', 'seller': 'Usman', 'location': 'Lahore' },

    ];
});

//Marksheet Controller
app.controller('markctr', function ($scope) {

    $scope.rollno = '';
    $scope.name = '';
    $scope.class = '';
    $scope.section = '';

    $scope.maths = 0;
    $scope.chemistry = 0;
    $scope.physics = 0;
    $scope.maxMarks = 100;

    $scope.calculatePercentage = function () {
        var totalMarks = $scope.maths + $scope.chemistry + $scope.physics;
        var percentage = (totalMarks / ($scope.maxMarks * 3)) * 100;
        return percentage.toFixed(2) + '%';
    };
});

// Word Count Controller
app.controller('wordctr', function ($scope) {
    $scope.name = '';
    // $scope.left = 20 - $scope.name.length;

    $scope.updateName = function () {
        if ($scope.name.length > 20) {
            $scope.name = $scope.name.slice(0, 20);
        }
    };

});



    


// On Click Controller
// app.controller('onctr', function ($scope) {

//     $scope.myfunctionx = function () {
//         $scope.x = true;
//         $scope.x = "food";
//     };

//     $scope.myfunctiony = function () {
//         $scope.y = true;
//         $scope.y = "mobile";
//     };
// });