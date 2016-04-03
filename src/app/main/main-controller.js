'use strict';

angular.module('ang09')
    .controller('MainCtrl', function ($scope) {
        var main = this;

        main.metrics = [
            {name: 'Widgets', expected: 100, current: 25},
            {name: 'Wombats', expected: 60, current: 35},
            {name: 'Woofers', expected: 90, current: 45},
            {name: 'Wingnuts', expected: 100, current: 55}
        ];
    });
