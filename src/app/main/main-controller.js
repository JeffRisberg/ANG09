'use strict';

angular.module('ang09')
    .controller('MainCtrl', function ($scope) {
        var main = this;

        main.metrics = [
            {name: 'Widgets',  goal: 100, current: 25},
            {name: 'Wombats',  goal: 60, current: 35},
            {name: 'Woofers',  goal: 90, current: 45},
            {name: 'Wingnuts', goal: 100, current: 55}
        ];
    })

console.log("end of main-controller");