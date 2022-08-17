import { helper } from '@ember/component/helper';

export default helper(function shorten([string, length]) {
  return string?.substring(0, length);
});
