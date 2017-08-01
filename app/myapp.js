var app = angular.module('myApp', []);

app.config(function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

app.controller('nameController', function () {
    ctr = this;
    ctr.name = "Matias";

    this.changeName = function (ctr) {
        ctr.name = "Felipe";
    }
});


app.component("hola", {
    template: ' <h3> Hola [[ $ctrl.myName ]]</h3>' +
    '<button type="button" ng-click=$ctrl.buttonClicked()> Button</button>',
    bindings: '=',
    controller: function () {
        this.myName = "Matias2";
        this.buttonClicked = function () {
            this.myName = this.myName + "hola";
        }
    }
});

app.component("hola2", {
    template: `
            <h2> Este es mi otro [[ $ctrl.name ]] </h2>
            <h5 ng-click=$ctrl.printName() > Click aquí :D </h5>
            `,
    bindings: {
        name: '<'
    },
    controller: function () {
        this.printName = function () {
            console.log(this.name);
        }
    }
});
