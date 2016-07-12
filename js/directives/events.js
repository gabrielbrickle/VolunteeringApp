module.exports = function(app) {
app.directive('thingtodo', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/events.html',
        scope: {
            eventname: '=info',
        },
        replace: true,
      };
});

app.directive('signupbutton', function () {
    return {
        restrict: 'E',
        template: '<button ng-click="signUp()">Sign Up </button>',
        replace: true,
    };
});

}
