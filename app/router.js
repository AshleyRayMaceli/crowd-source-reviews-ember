import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('hike', {path: '/hike/:hike_id'});
  this.route('oregon');
  this.route('washington');
});

export default Router;
