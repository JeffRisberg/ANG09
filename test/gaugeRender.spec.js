describe('Gauge Directive Rendering', function() {
    beforeEach(module('ang09'));
    var compile, mockBackend, rootScope;
// Step 1
    beforeEach(inject(function($compile, $httpBackend, $rootScope) {
        compile = $compile;
        mockBackend = $httpBackend;
        rootScope = $rootScope;
    }));

    it('should render HTML based on scope correctly', function() {
// Step 2
        var scope = rootScope.$new(); scope.metric = {
            name: 'Wombats',
            expected: 100,
            current: 66
        };
        scope.title = 'ANG09';
// Step 3
        mockBackend.expectGET('gauge.tmpl.html').respond(
            '<div>Alpha</div>' +
            '<div>Beta</div>');
// Step 4
        var element = compile('<div gauge' +
            ' stock-data="myStock"' +
            ' stock-title="This is {{title}}"></div>')(scope);
// Step 5
        scope.$digest();
        mockBackend.flush();
// Step 6
        expect(element.html()).toEqual(
            '<div>' +
            'Alpha' +
            '</div>' +
            '<div>' +
            'Beta' +
            '</div>');
    }); });
