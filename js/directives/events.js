
//this is the HTML el name
app.directive('thingtodo', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/events.html',
        scope: {
            // info="x" is a thing that should henceforth be called 'book'
            thingtodo: '=info',
        },
        replace: true,
    };
});
