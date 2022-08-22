import { Factory, association } from 'miragejs';

export default Factory.extend({
  status(i) {
    let values = ['new', 'active', 'error'];

    return values[i % values.length];
  },
  
  created(i) {
    let values = ['2000-01-01T13:30:00', '2000-01-02T13:40:00', '2000-01-03T13:50:00'];

    return values[i % values.length];
  },

  profile: association(),

  package: association(),

  commit: association()
});
