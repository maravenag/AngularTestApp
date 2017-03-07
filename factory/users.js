app.factory('Users', function ($http) {

    function Users() {
        this.userList = [];
    }

    Users.prototype.getUsersList = function () {
        var self = this; //Js callbacks change "this" reference
        var root = 'https://jsonplaceholder.typicode.com';
        return $http({
            method: 'GET',
            url: root +'/users',
        }).then(function(response){
            self.userList = response.data;
            return response;
        });
    }

    Users.prototype.findUser = function(username){
        var self = this;
        var found = self.userList.filter(function(d){
            return d.username == username;
        })
        return found;
    }

    return Users
})