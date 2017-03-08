app.factory('Posts', function ($http) {
    function Posts() {
        this.postList = []
    }

    Posts.prototype.getPostList = function () {
        var self = this;
        var root = 'https://jsonplaceholder.typicode.com';
        return $http({
            method: 'GET',
            url: root + '/posts',
        }).then(function (response) {
            self.postList = response.data;
            return response;
        });
    }

    Posts.prototype.getPostByUser = function (userid) {
        var self = this;
        var userPosts = self.postList.filter(function (d) {
            return d.userId == userid;
        })
        return userPosts;
    }

    return Posts;
})