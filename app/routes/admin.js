import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveHike(params) {
      var newHike = this.store.createRecord('hike', params);
      newHike.save();
    }
  }
});
