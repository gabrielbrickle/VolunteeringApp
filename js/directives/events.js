module.exports = function(app) {
//this is the HTML el name
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
        template: '<button ngClick="">Sign Up </button>',
        replace: true,
    };
});

}
