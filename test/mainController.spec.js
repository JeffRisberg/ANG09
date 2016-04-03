/**
 * Created by Brandon Risberg on 4/2/2016.
 */

describe('Controller: MainCtrl', function () {
    // Instantiate a new version of my module before each test
    beforeEach(module('ang09'));

    var scope;
    var ctrl;

    // Before each test instantiate a new instance of the controller
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {$scope: scope});
    }));

    it('should have created the metrics', function () {
        expect(ctrl.metrics).toEqual([
                {name: 'Widgets', expected: 1.00, current: 0.25},
                {name: 'Wombats', expected: 0.60, current: 0.35},
                {name: 'Woofers', expected: 0.90, current: 0.45},
                {name: 'Wingnuts', expected: 1.00, current: 0.55}]
        )
    });
})