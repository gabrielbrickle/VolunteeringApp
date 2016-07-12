let app = angular.module('Volunteer', ['ngRoute']);
require('./controllers/login')(app);
require('./controllers/events')(app);
require('./controllers/myevents')(app);
require('./directives/users');
require('./directives/events');

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/login',
        })
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'templates/login.html',
        })
        .when('/events', {
            controller: 'EventsController',
            templateUrl: 'templates/events.html',
        })
        .when('/myevents', {
            controller: 'MyEventsController',
            templateUrl: 'templates/myevents.html',
        })
}]);

app.factory('UserService', ['$http', '$location', function($http, $location) {
    // return {
    //     postUser: function(person) {
    //       console.log(person);
    //         $http({
    //             url: 'http://localhost:3000/api/users.json',
    //             method: 'POST',
    //             data: {
    //                 name: person,
    //                 password: 0,
    //
    //             },
    //         }).then(function(results) {
    //             console.log("posted")
    //         });
    //     }
    // }

}]);

app.factory('EventService', ['$http', '$location', function($http, $location) {
    let eventarray = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/events.json',
    }).then(function(response) {
        let listOfEvents = response.data;
        console.table("object with events", listOfEvents);
        angular.copy(listOfEvents, eventarray)
    });

    return {
        getEvents: function() {
            return eventarray;
        }
    }

}]);
