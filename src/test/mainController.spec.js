/**
 * Created by Brandon Risberg on 4/2/2016.
 */

descripe('Controller: MainCtrl', function() {
    // Instantiate a new version of my module before each test
    beforeEach(module('betterworkshw'));

    var ctrl;

    // Before each test instantiate a new instance of the controller
    beforeEach(inject(function($controller) {
        ctrl = $controller('MainCtrl');
    }));

    it('should have created the metrics', function() {
        expect(ctrl)
    });
})