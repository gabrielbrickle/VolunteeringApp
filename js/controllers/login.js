module.exports = function(app) {
    app.controller('LoginController', ['UserService', '$scope', '$http', '$location', function(UserService, $scope, $http, $location) {
        $scope.userarray = UserService.getUsers();

        $scope.loginClick = function() {
            UserService.postUser($scope.name)
            console.log('clicked')
        }


    }]);
}
