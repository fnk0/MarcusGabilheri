/**
 * Created by marcus on 10/4/16.
 */

(function() {
    var app = angular.module("Marcus");

    app.controller('HomeController', ['$http', '$scope', '$rootScope', '$location', '$window', '$routeParams',
        function($http, $scope, $rootScope, $location, $window, $routeParams) {
            $http.get("./views/home/home.json")
                .success(function(data) {

                    $('.bg-stretch').backstretch([data.banner_url], {
                        duration: 3000,
                        fade: 750
                    });

                    $scope.data = data;
                    $scope.skills = data.skills;

                }).error (function(error) {
                console.log(error);
            })
        }]);

})();