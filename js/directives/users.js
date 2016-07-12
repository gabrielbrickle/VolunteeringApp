module.exports = function(app) {
app.directive('persontyping', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/users.html',
        scope: {
            person: '=info',
        },
        // replace: true,
    };
});
}
