'use strict';

angular.module('ang09')
    .controller('MainCtrl', function ($scope, $rootScope) {
        var main = this;

        $rootScope.metrics = [
            {name: 'Widgets',  expected: 100, current: 25},
            {name: 'Wombats',  expected: 60, current: 35},
            {name: 'Woofers',  expected: 90, current: 45},
            {name: 'Wingnuts', expected: 100, current: 55}
        ];

        $rootScope.updateMetricCurrent = function(metricName, newValue) {
            $rootScope.metrics.forEach(function (metric) {
                if (metric.name == metricName) {
                    metric.current = newValue;
                }
            })
        };

        $rootScope.updateMetricExpected = function(metricName, newValue) {
            $rootScope.metrics.forEach(function (metric) {
                if (metric.name == metricName) {
                    metric.expected = newValue;
                }
            })
        };
    })
