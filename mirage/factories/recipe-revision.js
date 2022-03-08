import { Factory, association } from 'miragejs';

export default Factory.extend({
  revision() {
    return 'a96dea11e1b80baf13cc4221c4070ec4f813fc5f';
  },

  recipe: association(),
});
