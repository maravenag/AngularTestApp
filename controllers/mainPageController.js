app.controller('mainPageController', ['$scope', 'Users', function ($scope, Users) {

    var users = new Users();
    users.getUsersList().then(function () {
        $scope.userList = users.userList;
        console.log(users.findUser('Bret'));
    });

}]);