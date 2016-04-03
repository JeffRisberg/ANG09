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

                $scope.$watch("metric.expected", function () {
                    repaint(metric);
                });

                function repaint(metric) {
                    var arcInnerFrac = metric.expected / 100.0;
                    var arcOuterFrac = metric.current / 100.0;
                    var progressFrac = metric.current / metric.expected;
                    var outerColor = "arc_outer_norm"

                    if (progressFrac < 0.25) {
                        outerColor = "arc_outer_danger"
                    } else if (progressFrac < 0.5) {
                        outerColor = "arc_outer_warn"
                    }

                    d3.select($element[0]).selectAll("*").remove();

                    var svg = d3.select($element[0])
                        .append("svg")
                        .attr("width", 140)
                        .attr("height", 140)
                        .append("g")
                        .attr("transform", "translate(70,70)");

                    var arc_inner = d3.svg.arc()
                        .innerRadius(50)
                        .outerRadius(53)
                        .startAngle(0)
                        .endAngle(arcInnerFrac * 2 * Math.PI)
                        .cornerRadius(10);

                    svg.append("path")
                        .attr("class", "arc_inner")
                        .attr("d", arc_inner);

                    var arc_outer = d3.svg.arc()
                        .innerRadius(54)
                        .outerRadius(60)
                        .startAngle(0)
                        .endAngle(arcOuterFrac * 2 * Math.PI)
                        .cornerRadius(10);

                    svg.append("path")
                        .attr("class", outerColor)
                        .attr("d", arc_outer);

                    var circle_center = d3.svg.arc()
                        .innerRadius(0)
                        .outerRadius(43)
                        .startAngle(0)
                        .endAngle(2 * Math.PI)

                    svg.append("path")
                        .attr("class", "circle_center")
                        .attr("d", circle_center);
                }
            }
        }
    }]
)