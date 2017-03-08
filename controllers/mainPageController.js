app.controller('mainPageController', ['$scope', 'Users', 'Posts', function ($scope, Users, Posts) {

    var users = new Users();
    users.getUsersList().then(function () {
        $scope.userList = users.userList;
        users.findUser('Bret');
    });

    var posts = new Posts();
    posts.getPostList().then(function () {
        console.log(posts.getPostByUser(1));
    })

}]);