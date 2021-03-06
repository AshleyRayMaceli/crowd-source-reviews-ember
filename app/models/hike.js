import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  location: attr(),
  description: attr(),
  image: attr(),
  ratings: hasMany('rating', {async: true}),
});
