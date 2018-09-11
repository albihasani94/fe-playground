(function () {

    var app = angular.module("mainModule", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/main", {
                templateUrl: "html/main.html",
                controller: "mainController"
            })
            .when("/dummy", {
                templateUrl: "html/dummy.html",
                controller: "dummyController"
            })
            .when("/user/:username", {
                templateUrl: "html/githubUser.html",
                controller: "userController"
            })
            .when("/repository/:username/:repositoryName", {
                templateUrl: "html/githubRepository.html",
                controller: "repositoryController"
            })
            .otherwise({ redirectTo: "/main" });
    });

})();