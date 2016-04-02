'use strict';

angular.module('ang09')
    .directive('slider', [function () {
        return {
            scope: {
                metric: '='
            },
            templateUrl: 'app/slider/slider.tmpl.html',
            link: function ($scope, $element, $attrs) {

                $scope.getFraction = function (metric) {
                    return metric.current / metric.goal;
                }
            }
        }
    }]
)