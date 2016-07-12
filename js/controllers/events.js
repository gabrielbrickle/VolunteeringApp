module.exports = function(app) {
    app.controller('EventsController', ['EventService', '$scope', '$location', function(EventService, $scope, $location) {
    $scope.eventlist = EventService.getEvents();
    // $scope.eventlist = [];
    $scope.signUp= function(){
      console.log("clicked sign up");
    }
    }]);
}
