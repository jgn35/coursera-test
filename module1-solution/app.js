(function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', lunchCheck);
    lunchCheck.$inject = ["$scope"];
    function lunchCheck($scope) {
        $scope.menu = "";
        $scope.data=""
        $scope.checkIfTooMuch = function () {
            if ($scope.menu == "") {
                $scope.message = "Please enter data first";
                $scope.messageClass = "no-data";
                return;
            }
            $scope.messageClass = "has-data";
            var items = $scope.menu.split(',');
            if (items.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    }
}());