/**
 * Created by marcus on 10/4/16.
 */

(function() {
    var app = angular.module("Marcus");

    app.controller('SingleProjectController', ['$http', '$scope', '$rootScope', '$location', '$window', '$routeParams',
        function($http, $scope, $rootScope, $location, $window, $routeParams) {
            $scope.project = $routeParams.project;
            if ($scope.project) {
                $http.get("./views/single_project/" + $scope.project + ".json")
                    .success(function(data) {
                        console.log(data);
                        $scope.data = data;

                        $(".js-height-full").height($(window).height());

                        $('.bg-stretch').backstretch([data.banner], {
                            duration: 3000,
                            fade: 750
                        });
                    })
                    .error(function(error) {
                        console.log(error);
                    });
            } else {
                $window.location = "home";
            }


        }]);

})();