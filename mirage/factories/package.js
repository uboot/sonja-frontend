import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({
  package_id(i) {
    let values = [
      '227220812d7ea3aa060187bae41abbc9911dfdfd',
      'dfdfdf1199cbba14eab781060aa3aed218022722',
    ];

    return values[i % values.length];
  },

  recipe_revision: association(),
});
