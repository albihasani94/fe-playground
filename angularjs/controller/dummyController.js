(function () {
    var app = angular.module('mainModule');

    var dummyController = function ($scope) {
        var person = {
            firstName: "John",
            lastName: "Cena",
            imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19cesl3eIoheAZ3tR0Xo3ebJiKuONH-Prfyn-FGhx8uAuiqtZ"
        };
        $scope.person = person;
    };

    app.controller("dummyController", dummyController);
})();