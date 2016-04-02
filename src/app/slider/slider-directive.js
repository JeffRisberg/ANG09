'use strict';

angular.module('ang09')
    .directive('slider', [function () {
        return {
            scope: {
                currentValue: '=',
                finalValue: '='
            },
            templateUrl: 'app/slider/slider.tmpl.html',
            link: function ($scope, $element, $attrs) {

                $scope.getFraction = function (currentValue, finalValue) {
                    return currentValue / finalValue;
                }
            }
        }
    }]
)