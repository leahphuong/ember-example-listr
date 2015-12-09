import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //object inside RSVP.hash is going to be used in the top level template
    return Ember.RSVP.hash({
      //how front end talks to back end
      // it will look for /app/lists/model/list
      lists: this.store.findAll('list')
    });
  }
});
