/**
 * Created by Brandon Risberg on 4/3/2016.
 */

describe('Gauge Directive Rendering', function () {
    beforeEach(module('ang09'));
    beforeEach(module('templates'));

    var compile, mockBackend, rootScope;

    beforeEach(inject(function ($compile, $rootScope) {
        compile = $compile;
        rootScope = $rootScope;
    }));

    it('should render HTML based on scope correctly', function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            expected: 1.00,
            current: 0.66
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            '<svg width="180" height="180">' +
            '<g transform="translate(90,90)">' +
            '<path class="arc_inner" d="M0,82A82,82 0 1,1 0,-82A82,82 0 1,1 0,82M0,76A76,76 0 1,0 0,-76A76,76 0 1,0 0,76Z"></path>' +
            '<path class="arc_outer_norm" d="M0,-86.94826047713663A3,3 0 0,1 3.103448275862069,-89.94647635565859A90,90 0 1,1 -74.28141104455096,50.81606018996808A3,3 0 0,1 -73.41284439466959,46.58920774046309L-73.41284439466959,46.58920774046309A3,3 0 0,1 -69.32931697491424,47.4283228439702A84,84 0 1,0 2.896551724137931,-83.95004459861468A3,3 0 0,1 0,-86.94826047713663Z"></path>' +
            '<path class="circle_center" d="M0,76A76,76 0 1,1 0,-76A76,76 0 1,1 0,76Z"></path>' +
            '<text font-size="30px" transform="translate(0,-2)" style="text-anchor: middle;">66%</text>' +
            '<text font-size="20px" font-style="oblique" transform="translate(0,25)" style="text-anchor: middle;">Progress</text>' +
            '</g>' +
            '</svg>');
    });

    it("should validate missing 'Current' value", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            expected: 1.00
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Current' Value");
    });

    it("should validate missing 'Expected' value", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            current: 0.50
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Expected' Value");
    });

    it("should validate 'Expected' value greater than or equal to 0.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            current: 0.50,
            expected: -0.20
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Expected' Value");
    });

    it("should validate 'Expected' value less than or equal to 1.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            current: 0.50,
            expected: 1.20
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Expected' Value");
    });

    it("should validate 'Current' value greater than or equal to 0.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            current: -0.20,
            expected: 0.50
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Current' Value");
    });

    it("should validate 'Current' value less than or equal to 1.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            current: 1.2,
            expected: 0.50
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Current' Value");
    });
});
