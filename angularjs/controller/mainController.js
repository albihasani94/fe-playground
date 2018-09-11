(function () {

    var app = angular.module('mainModule', []);

    var mainController = function ($scope) {
        $scope.message = "Hello, AngularJS";
    };

    var personController = function ($scope) {
        var person = {
            firstName: "John",
            lastName: "Cena",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19cesl3eIoheAZ3tR0Xo3ebJiKuONH-Prfyn-FGhx8uAuiqtZ"
        };
        $scope.person = person;
    };

    var githubController = function ($scope, githubService, $log, $anchorScroll, $location) {

        var onUserComplete = function (data) {
            $scope.user = data;
            githubService.getRepos($scope.user)
                .then(onRepos, onRequestError);
        }

        var onRepos = function (data) {
            $scope.repos = data;
            $location.hash("userdetails");
            $anchorScroll();
        }

        var onRequestError = function (cause) {
            $scope.error = "Could not fetch data";
        }

        $scope.search = function (username) {
            $log.info("Searching for " + username);
            githubService.getUser(username)
                .then(onUserComplete, onRequestError);
        }

        $scope.repoSortOrder = '-stargazers_count';
    };

    app.controller("mainController", mainController);
    app.controller("personController", personController);
    app.controller("githubController", githubController);

})();