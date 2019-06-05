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
                .when("/start", {
                    "controller": "StartCtrl",
                    "templateUrl": "views/start.html"
                })
                .otherwise({
                    redirectTo: "/"
                });

            $locationProvider.html5Mode(false);

        })
        .controller("HomeCtrl", ["$scope", function ($scope) {

        }])
        .controller("StartCtrl", ["$scope", function ($scope) {

            $scope.data = { command: "" };

            $scope.emptyCommand = function () {
                $scope.data = { command: "" };
            };

            $scope.sendCommand = function ($valid) {
                if ($valid) {
                    console.log($scope.data.command);
                    $scope.emptyCommand();
                }
            };
        }]);

})();