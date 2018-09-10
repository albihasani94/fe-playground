(function() {

    var app = angular.module('controllerModule', []);

    var mainController = function($scope) {
        $scope.message = "Hello, AngularJS";
    };

    var personController = function($scope) {
        var person = {
            firstName: "John",
            lastName: "Cena",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19cesl3eIoheAZ3tR0Xo3ebJiKuONH-Prfyn-FGhx8uAuiqtZ"
        };
        $scope.person = person;
    };

    var testHttpController = function($scope, $http) {
        var promise = $http.get("https://api.github.com/users/albihasani94");

        var onUserComplete = function(response) {
            $scope.user = response.data;
        }

        var onRequestError = function(cause) {
            $scope.error = "Could not fetch user";
        }

        promise.then(onUserComplete, onRequestError);
    };

    app.controller("mainController", mainController);
    app.controller("personController", personController);
    app.controller("testHttpController", testHttpController);

})();