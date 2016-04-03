'use strict';

angular.module('ang09')
    .directive('gauge', [function () {
        return {
            restrict: 'EA',
            scope: {metric: '='},
            templateUrl: 'app/gauge/gauge.tmpl.html',
            link: function ($scope, $element, $attrs) {

                var metric = $scope.metric;
                $scope.$watch("metric.current", function () {
                    repaint(metric);
                });

                function repaint(metric) {
                    var fraction = metric.current / metric.goal;

                    d3.select($element[0]).selectAll("*").remove();

                    var svg = d3.select($element[0])
                        .append("svg")
                        .attr("width", 200)
                        .attr("height", 200)
                        .append("g")
                        .attr("transform", "translate(100,100)");

                    var arc = d3.svg.arc()
                        .innerRadius(50)
                        .outerRadius(70)
                        .startAngle(0)
                        .endAngle(2.0 * fraction * Math.PI);

                    svg.append("path")
                        .attr("class", "arc")
                        .attr("d", arc);
                }
            }
        }
    }]
)