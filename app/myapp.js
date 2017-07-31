var app = angular.module('myApp', []);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.component("hola", {
    template: ' <h3> Hola [[ $ctrl.myName ]]</h3>' +
              '<button type="button" ng-click=$ctrl.buttonClicked()> Button</button>',
    bindings: '=',
    controller: function () {
        this.myName = "Matias"

        this.buttonClicked = function () {
            console.log("clicked!!");
        }
    }
});

