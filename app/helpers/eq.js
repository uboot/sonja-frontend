import { helper } from '@ember/component/helper';

export default helper(function eq([lhs, rhs]) {
  return lhs == rhs;
});
