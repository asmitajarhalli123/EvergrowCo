var app = angular.module("myapp", []);

app.controller("myctrl", function($scope) {

    $scope.mess = "EvergrowCo 🌿";
    $scope.isadd = false;
    $scope.plant = {};

    $scope.addPlant = function() {
        $scope.isadd = true;
    };

    $scope.savePlant = function() {
        console.log($scope.plant);
        alert("Plant Added!");
    };

});
