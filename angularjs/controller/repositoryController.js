(function () {

    var app = angular.module('mainModule');

    var repositoryController = function ($scope, githubService, $routeParams) {

        var onRepoComplete = function (data) {
            $scope.repository = data;
            githubService.getRepositoryContributors($scope.repository)
                .then(onContributors, onRequestError);
        }

        var onContributors = function (data) {
            $scope.contributors = data;
        }

        var onRequestError = function (cause) {
            $scope.error = "Could not fetch data";
        }

        $scope.username = $routeParams.username;
        $scope.repositoryName = $routeParams.repositoryName;

        githubService.getRepositoryWithDetails($scope.username, $scope.repositoryName)
            .then(onRepoComplete, onRequestError);

    };

    app.controller("repositoryController", repositoryController);

})();