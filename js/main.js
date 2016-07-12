let app = angular.module('Volunteer', ['ngRoute']);
require('./controllers/login')(app);
require('./controllers/events')(app);
require('./controllers/myevents')(app);
require('./directives/events')(app);
require('./directives/users')(app);

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
    let userarray = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/users.json',
    }).then(function(response) {
        let listOfEvents = response.data;
        console.log("object with userss", listOfEvents);
        angular.copy(listOfEvents, eventarray)
    });

    return {
        getUsers: function() {
            return userarray;
        }
    }


}]);

app.factory('EventService', ['$http', '$location', function($http, $location) {
    let eventarray = [];

    $http({
        method: 'GET',
        url: 'http://localhost:3000/api/events.json',
    }).then(function(response) {
        let eventObject = response.data;
        console.log("object with events", eventObject);
        angular.copy(eventObject, eventarray)
    });

    return {
        getEvents: function() {
            return eventarray;
        }
    }

}]);
