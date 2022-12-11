import { Factory } from 'miragejs';

export default Factory.extend({
  github_secret() {
    return "0123456789abcdef";
  }
});
