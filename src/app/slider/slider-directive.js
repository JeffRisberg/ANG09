'use strict';

angular.module('ang09')
    .directive('slider', [function () {
        return {
            restrict: 'E',
            scope: {metric: '='},
            templateUrl: 'app/slider/slider.tmpl.html',

            link: function ($scope, $element, $attrs) {
                // temporary strings bound to the results of the range inputs
                $scope.actualStr  = $scope.metric.actual;
                $scope.expectedStr = $scope.metric.expected;

                // update the slider results back to the metrics with an explicit type conversion
                $scope.$watch("actualStr", function () {
                    $scope.metric.actual = parseFloat($scope.actualStr);
                });
                $scope.$watch("expectedStr", function () {
                    $scope.metric.expected = parseFloat($scope.expectedStr);
                });
            }
        }
    }]
)