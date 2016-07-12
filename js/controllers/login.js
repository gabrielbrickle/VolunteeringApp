module.exports = function(app) {
    app.controller('LoginController', ['UserService', '$scope', '$http', '$location', function(UserService, $scope, $http, $location) {
        $scope.userarray = UserService.getUsers();
        $scope.name = "";

        $scope.loginClick = function() {
          console.log(`${scope.name} is the username`)
          // UserService.postUser($scope.name)
          UserService.createUser($scope.name)
          $location.path('/events');
        }


    }]);
}
