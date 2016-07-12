app.directive('book', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/events.html',
        scope: {

            // info="x" is a thing that should henceforth be called 'book'
            book: '=info',
        },
        // Good idea: don't leave random names scattered throughout your HTML elements
        replace: true,
    };
});
