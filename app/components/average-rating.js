import Ember from 'ember';

export default Ember.Component.extend({

  averageRating: Ember.computed('hike', function() {
    var totalSum = 0;
    var totalRatings = this.get('hike.ratings.length');
    this.get('hike.ratings').forEach(function(hike) {
      totalSum += hike.get('stars');
    });
    return totalSum / totalRatings;
  }),
});
