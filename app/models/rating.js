import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  username: attr(),
  stars: attr(),
  comment: attr(),
  time: attr(),
  hike: belongsTo('hike', {async: true}),
});
