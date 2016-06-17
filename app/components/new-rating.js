import Ember from 'ember';
import moment from 'moment';

var clearStars = function() {
  $('.star-rating-selection').removeClass('selected-stars');
}

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
      clearStars();
    },
    rateOneStar() {
      clearStars();
      this.set('stars', 1);
      $('#rateOneStar').addClass('selected-stars');
    },
    rateTwoStar() {
      clearStars();
      this.set('stars', 2);
      $('#rateTwoStar').addClass('selected-stars');
    },
    rateThreeStar() {
      clearStars();
      this.set('stars', 3);
      $('#rateThreeStar').addClass('selected-stars');
    },
    rateFourStar() {
      clearStars();
      this.set('stars', 4);
      $('#rateFourStar').addClass('selected-stars');
    },
    rateFiveStar() {
      clearStars();
      this.set('stars', 5);
      $('#rateFiveStar').addClass('selected-stars');
    },
  }
});
