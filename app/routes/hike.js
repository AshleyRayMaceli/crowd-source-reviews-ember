import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('hike', params.hike_id);
  },

  actions: {
    saveRating(params) {
      var newRating = this.store.createRecord('rating', params);
      var hike = params.hike;
      hike.get('ratings').addObject(newRating);
      newRating.save().then(function() {
        return hike.save();
      });
    }
  }
});
