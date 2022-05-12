import { Factory } from 'miragejs';

export default Factory.extend({
  number(i) {
    let values = ['1', '2', '3'];

    return values[i % values.length];
  },
  
  time(i) {
    let values = ['2000-01-01T13:30:00', '2000-01-01T13:30:01', '2000-01-01T13:30:05'];

    return values[i % values.length];
  },

  content(i) {

    let values = [
      'Start build...', 
      'Fetch sources',
      'Compile'
    ];

    return values[i % values.length];
  }
});
