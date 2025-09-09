(function () {
    'use strict';

    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', function ($scope) {
            $scope.name = "";
            $scope.score = 0;
            $scope.displayNumeric = function () {
                var totalNameValue = calculateNumericForString($scope.name); 
                $scope.score = totalNameValue;
            };
        });

    function calculateNumericForString(string) {
        var totalStringValue = 0;
        for (var i = 0; i < string.length; i++) {
            totalStringValue += string.charCodeAt(i);
        }
        return totalStringValue;
    }

})();