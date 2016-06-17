import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveRating(params) {
      this.sendAction('saveRating', params);
    },
    
  }
});
