'use strict';

angular.module('ang09', [
    'ui.router'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/dashboard/index.tmpl.html',
                controller: 'DashboardCtrl',
                controllerAs: 'ctrl'
            });
    });
