import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveRating() {
      var params = {
        username: this.get('username'),
        stars: this.get('stars'),
        comment: this.get('comment'),
        time: moment().format('LL'),
        hike: this.get('hike'),
      };
      this.sendAction('saveRating', params);
      this.set('username', "");
      this.set('stars', "");
      this.set('comment', "");
    },

  }
});
