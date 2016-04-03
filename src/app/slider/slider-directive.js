'use strict';

angular.module('ang09')
    .directive('slider', [function () {
        return {
            restrict: 'EA',
            scope: {metric: '='},
            templateUrl: 'app/slider/slider.tmpl.html',
            link: function ($scope, $element, $attrs) {

                var rootScope = $scope.$root;
                var metric = $scope.metric;

                $scope.currentChanged = function (newCurrentValue) {
                    rootScope.updateMetricCurrent(metric.name, parseInt(newCurrentValue));
                };

                $scope.expectedChanged = function (newExpectedValue) {
                    rootScope.updateMetricExpected(metric.name, parseInt(newExpectedValue));
                };
            }
        }
    }]
)