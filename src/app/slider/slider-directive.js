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

                //$scope.$watch("metric.current", function(oldValue, newValue) {
                //    console.log("change");
                //    rootScope.updateMetric(metric.name, newValue);
                //});

                $scope.currentChanged = function (newCurrentValue) {
                    console.log("change");
                    rootScope.updateMetric(metric.name, parseInt(newCurrentValue));
                };
            }
        }
    }]
)