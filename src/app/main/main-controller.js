'use strict';

angular.module('ang09')
    .controller('MainCtrl', function ($scope) {
        var main = this;

    })
    .directive('gauge', [function () {
        return {
            scope: {
                currentValue: '=',
                finalValue: '='
            },
            template: '<div class="wheel">' +
            'wheel goes here' +
            ' {{currentValue}}' +
            ' {{finalValue}}' +
            ' {{getFraction(currentValue, finalValue)}}' +
            '</div>',
            link: function ($scope, $element, $attrs) {

                $scope.getFraction = function (currentValue, finalValue) {
                    return currentValue / finalValue;
                }
            }
        }
    }]
)

console.log("end of main-controller");