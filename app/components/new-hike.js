import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveHike() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        description: this.get('description'),
        image: this.get('image'),
      };
      this.sendAction('saveHike', params);
      this.set('name', "");
      this.set('location', "");
      this.set('description', "");
      this.set('image', "");
    },
  }
});
