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
                .when("/register", {
                    "controller": "RegisterCtrl",
                    "templateUrl": "views/register.html"
                })
                .when("/show-list", {
                    "controller": "ShowListCtrl",
                    "templateUrl": "views/list.html"
                })
                .otherwise({
                    redirectTo: "/"
                });

            $locationProvider.html5Mode(false);

        })
        .controller("HomeCtrl", ["$scope", function ($scope) {

        }])
        .controller("ShowListCtrl", ["$scope", "CmdFactory", function ($scope, CmdFactory) {

            $scope.data = [];

            CmdFactory.list().then(function (response) {

                console.log(response);
                $scope.data = response.result;

            });

        }])
        .controller("RegisterCtrl", ["$scope", "CmdFactory", "$timeout", function ($scope, CmdFactory, $timeout) {

            $scope.isSuccess = false;
            $scope.isDanger = false;
            $scope.showAlert = false;
            $scope.message = "";

            $scope.data = { cmd: "", description: "" };

            $scope.empty = function () {
                $scope.data = { cmd: "", description: "" };
            };

            $scope.save = function (frm) {
                if (frm.$valid) {

                    console.log($scope.data);

                    CmdFactory.create($scope.data).then(function (response) {
                        console.log(response);

                        if (response.returnCode === 1) {

                            $scope.showAlert = true;
                            $scope.isSuccess = true;
                            $scope.message = "Your command was created with success!";

                        } else {

                            $scope.showAlert = true;
                            $scope.isDanger = true;
                            $scope.message = "Your command wasn't created, try again!";
                        }

                        $timeout(function () {
                            $scope.isSuccess = false;
                            $scope.isDanger = false;
                            $scope.showAlert = false;
                            $scope.message = "";
                        }, 5000);

                    });
                    $scope.empty();
                    frm.$setPristine();
                }
            };
        }])
        .factory("CmdFactory", ["$http", "$q", function ($http, $q) {

            return {

                create: function (input) {

                    let defer = $q.defer();

                    $http.post("/api/command", input).then(function (response) {

                        defer.resolve(response.data);

                    }, function (error) {

                        defer.reject(error);

                    });

                    return defer.promise;
                },
                list: function () {

                    let defer = $q.defer();

                    $http.get("/api/command").then(function (response) {

                        defer.resolve(response.data);

                    }, function (error) {

                        defer.reject(error);

                    });

                    return defer.promise;
                }
            };

        }]);

})();