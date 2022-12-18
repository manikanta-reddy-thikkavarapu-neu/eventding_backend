const userdb = require("../model/eventUserModel");
let eventServices = {};

eventServices.createEvents = (UserObj) => {
  return userdb.postEvent(UserObj).then((data) => {
    if (data) {
      return data;
    } else {
      let err = new Error("Unable to Post an Event");
      err.status = 404;
      throw err;
    }
  });
};

eventServices.deleteEvents = (eventId) => {
  console.log("eventIDD" + eventId);

  return userdb.findEventByEventId(eventId).then((object) => {
    if (object && object.id == eventId) {
      return userdb.deleteEvent(eventId).then((data) => {
        console.log("data " + data);
        if (data) {
          console.log("data " + data);
          return object.id;
        } else {
          let err = new Error("User delete failed");
          err.status = 503;
          throw err;
        }
      });
    } else {
      let err = new Error("User does not exist");
      err.status = 404;
      throw err;
    }
  });
};

eventServices.createStudentBookedEvents = (newStudentEvent) => {

  return userdb.findStudentEventByEventId(newStudentEvent.id).then(object => {
    {
      if (object != null) {
        let err = new Error("Event ticket is already booked by you");
        err.status = 404;
        throw err;
      } else {
        return userdb.postStudentEvent(newStudentEvent).then((data) => {
          if (data) {
            return data;
          } else {
            let err = new Error("Unable to post event in student collection");
            err.status = 404;
            throw err;
          }
        });
      }
    }
  })

};

module.exports = eventServices;
