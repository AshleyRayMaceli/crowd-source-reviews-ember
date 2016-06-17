import Ember from 'ember';

export default Ember.Component.extend({
  favoriteHikes: Ember.inject.service(),

  faveQuantity: Ember.computed('favoriteHikes.hikes.[]', function() {
    return this.get('favoriteHikes.hikes.length');
  }),
});
