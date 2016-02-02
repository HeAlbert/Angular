/// <reference path="angular.min.js" />

    var myApp = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {
            var employees = [
                { firstName: "David1", lastName: "Hook", gender: "Male" },
                { firstName: "David2", lastName: "Hook", gender: "Male"},
                { firstName: "David3", lastName: "Hook" ,gender: "Male"}
            ]
            var country = {
                name: "China",
                Capital: "Beijing",
                flag: "/img/cnlarge.gif"
            }
            $scope.employees = employees;
            $scope.country = country;

        });

