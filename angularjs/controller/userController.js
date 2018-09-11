(function () {

    var app = angular.module('mainModule');

    var userController = function ($scope, githubService, $routeParams) {

        var onUserComplete = function (data) {
            $scope.user = data;
            githubService.getRepos($scope.user)
                .then(onRepos, onRequestError);
        }

        var onRepos = function (data) {
            $scope.repos = data;
        }

        var onRequestError = function (cause) {
            $scope.error = "Could not fetch data";
        }

        $scope.repoSortOrder = '-stargazers_count';
        $scope.username = $routeParams.username;

        githubService.getUser($scope.username)
            .then(onUserComplete, onRequestError);
    };

    app.controller("userController", userController);

})();