(function () {

    var app = angular.module('mainModule');

    var mainController = function ($scope, $location) {

        $scope.message = "Hello, AngularJS";

        $scope.angularjsLogo = "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/002/full/angularjs.png";

        $scope.search = function (username) {
            $location.path("/user/" + username);
        };

    };

    app.controller("mainController", mainController);

})();