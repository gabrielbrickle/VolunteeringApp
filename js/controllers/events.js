module.exports = function(app) {
    app.controller('EventsController', ['EventService', '$scope', '$location', function(EventService, $scope, $location) {
    $scope.eventlist = EventService.getEvents();
    }]);
}
