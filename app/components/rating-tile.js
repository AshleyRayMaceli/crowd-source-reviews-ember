import Ember from 'ember';

export default Ember.Component.extend({
  displayStarRating: Ember.computed('rating.stars', function() {
    if (this.get('rating.stars') === 1) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('rating.stars') === 2) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('rating.stars') === 3) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('rating.stars') === 4) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    } else if (this.get('rating.stars') === 5) {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>' +
        '<b class="glyphicon glyphicon-star"></b>'
      );
    } else {
      return Ember.String.htmlSafe(
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>' +
        '<b class="glyphicon glyphicon-star-empty"></b>'
      );
    }
  }),
});
