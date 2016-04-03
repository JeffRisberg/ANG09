'use strict';

angular.module('ang09')
    .controller('MainCtrl', function ($scope, $rootScope) {
        var main = this;

        $rootScope.metrics = [
            {name: 'Widgets',  goal: 100, current: 25},
            {name: 'Wombats',  goal: 60, current: 35},
            {name: 'Woofers',  goal: 90, current: 45},
            {name: 'Wingnuts', goal: 100, current: 55}
        ];

        $rootScope.updateMetric = function(metricName, newValue) {
            $scope.metrics.forEach(function (metric) {
                if (metric.name == metricName) {
                    metric.value = newValue;
                }
            })
        };
    })
