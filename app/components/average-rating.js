import Ember from 'ember';

export default Ember.Component.extend({

  averageRating: Ember.computed('hike', function() {
    var totalSum = 0;
    var totalRatings = 0;
    this.get('hike.ratings').forEach(function(hike) {
      totalSum += hike.get('stars');
      totalRatings += 1;
    });
    return totalSum / totalRatings;
  }),
});
