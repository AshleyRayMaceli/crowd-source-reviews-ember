import Ember from 'ember';

export default Ember.Component.extend({
  favoriteHikes: Ember.inject.service(),

  actions: {
    addToFaves(hike) {
      this.get('favoriteHikes').add(hike);
    },
    saveRating(params) {
      this.sendAction('saveRating', params);
    }
  }
});
