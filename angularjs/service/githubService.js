(function () {

    var githubService = function ($http, $log) {

        var getUser = function (username) {
            $log.info("Searching for username: " + username);
            return $http.get("https://api.github.com/users/" + username)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepos = function (user) {
            return $http.get(user.repos_url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getRepositoryWithDetails = function (username, repositoryName) {
            var repository;
            return $http.get("https://api.github.com/repos/" + username + "/" + repositoryName)
                .then(function (response) {
                    repository = response.data;
                    return $http.get(repository.contributors_url);
                }).then(function(response) {
                    repository.contributors = response.data;
                    return repository;
                });
        };

        return {
            getUser: getUser,
            getRepos: getRepos,
            getRepositoryWithDetails: getRepositoryWithDetails
        };

    };

    var module = angular.module("mainModule");
    module.factory("githubService", githubService);

})();