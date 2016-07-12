app.directive('persontyping', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/directives/users.html', 
        scope: {
            // info="x" is a thing that should henceforth be called 'book'
            persontyping: '=info',
        },
        replace: true,
    };
});
