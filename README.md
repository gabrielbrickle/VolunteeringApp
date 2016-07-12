# VolunteeringApp
App using Angular.js
-----planning below
End points:
/login
/events
/myevents


Click events:
loginClick
-sends a post request to server
eventSelect
-sends a post request to server
myEventsClick
-sends a get request to server to "get"
{
  eventname: (name of the event they clicked on)
  name: (name they typed in when logging in to site)
}


Login Logic:
-Post username to server as name: ""
-Current Post request will send name + password to server
-Get username on the click of volunteer event selection
-Store object that looks like {
  name:
  eventname:
  date:
  description:
}
-Render events based on that object to the myevents.html template file


Event Page Logic:
-Get request to "Get" events on the /events page
-Object should look like events.json file
-Current get request is rendering to page
-

My Events Logic:
-Need to get original login "name" and event "name" that was signed up for and render them both to the page on the click of the /myevents route
