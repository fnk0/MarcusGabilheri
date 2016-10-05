/**
 * Created by marcus on 2/1/16.
 */

(function () {

    var app = angular.module("Marcus", ['ngRoute']);

    app.config(function ($httpProvider, $routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'views/home/home.html',
                controller: 'HomeController',
                controllerAs: 'ctrl'
            })
            .when('/projects/:project', {
                templateUrl: 'views/single_project/single_project.html',
                controller: 'SingleProjectController',
                controllerAs: 'ctrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });

    app.directive('scrollOnClick', function() {
        return {
            restrict: 'A',
            link: function(scope, $elm, attrs) {
                var idToScroll = attrs.href;
                $elm.on('click', function() {
                    var $target;
                    if (idToScroll) {
                        $target = $(idToScroll);
                    } else {
                        $target = $elm;
                    }
                    $("body").animate({
                        scrollTop: $target.offset().top - 90
                    }, "slow");
                });
            }
        }
    });

})();