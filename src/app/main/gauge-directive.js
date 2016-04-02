'use strict';

angular.module('ang09')
    .directive('gauge', [function () {
        return {
            scope: {
                currentValue: '=',
                finalValue: '='
            },
            templateUrl: 'app/main/gauge.tmpl.html',
            link: function ($scope, $element, $attrs) {

                $scope.getFraction = function (currentValue, finalValue) {
                    return currentValue / finalValue;
                }
            }
        }
    }]
)