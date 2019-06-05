"use-strict";

(function () {

    let app = angular.module("App", ["ngRoute"]);
    app
        .config(function ($routeProvider, $locationProvider) {

            $routeProvider
                .when("/", {

                    "controller": "HomeCtrl",
                    "templateUrl": "views/home.html"
                })
                .otherwise({
                    redirectTo: "/"
                });

            $locationProvider.html5Mode(false);

        })
        .controller("HomeCtrl",["$scope",function($scope){

        }]);
 
})();