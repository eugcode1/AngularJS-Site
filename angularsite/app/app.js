/*global angular*/
/*define global to git rid of 'angular' warning*/
var mainApp = angular.module("mainApp", ['ngRoute']);//need pass in additonal library

/*
mainApp.controller('mainController',function HeaderController($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});*/


/*angular routing navigation*/
// configure our routes
mainApp.config(function ($routeProvider) {
    $routeProvider
    //path based on index!!!!
    // route for the home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })

        //route for the web framework page
        .when('/web', {
            templateUrl: 'views/web.html',
            controller: 'webController'
        });

});

// create the controller and inject Angular's $scope
mainApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.HomeMessage = 'Home Controller Called !!!';
});

mainApp.controller('aboutController', function ($scope) {
    $scope.AboutMessage = 'About Controller Called !!!';
});

mainApp.controller('contactController', function ($scope) {
    $scope.ContactMessage = 'Contact Controller Called !!!';
});

mainApp.controller('webController', function ($scope) {
    $scope.WebMessage = 'Web Controller Called !!!';
});

mainApp.controller('HeaderController', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});