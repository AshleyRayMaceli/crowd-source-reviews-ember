import Ember from 'ember';

export default Ember.Service.extend({
  hikes: [],

  add(hike) {
    this.get('hikes').pushObject(hike);
  }
});
