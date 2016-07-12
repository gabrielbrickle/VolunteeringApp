(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(app) {
    app.controller('EventsController', ['EventService', '$scope', '$location', function(EventService, $scope, $location) {
    $scope.eventlist = EventService.getEvents();
    // $scope.eventlist = [];
    }]);
}

},{}],2:[function(require,module,exports){
module.exports = function(app) {
    app.controller('LoginController', ['UserService', '$scope', '$http', '$location', function(UserService, $scope, $http, $location) {
        $scope.userarray = UserService.getUsers();

        $scope.loginClick = function() {
            UserService.postUser($scope.name)
            console.log('clicked')
        }


    }]);
}

},{}],3:[function(require,module,exports){
module.exports = function(app) {
    app.controller('MyEventsController', ['$scope', '$http', '$location', function($scope, $http, $location) {

    }]);
}

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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
        .when('/users', {
          controller: 'LoginController',
          templateUrl: 'templates/users.html',
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
        let listOfUsers = response.data;
        console.log("object with userss", listOfUsers);
        angular.copy(listOfUsers, userarray)
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

},{"./controllers/events":1,"./controllers/login":2,"./controllers/myevents":3,"./directives/events":4,"./directives/users":5}]},{},[6])