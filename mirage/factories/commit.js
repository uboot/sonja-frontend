import { Factory, association } from 'ember-cli-mirage';

export default Factory.extend({

  sha(i) {
    let values = [
      '088843d968f7fe8e9755557d6a9b0f56559af113',
      'e133b2b8d2b50c4bde4ac00254cc6e6b64a28049'
    ];

    return values[i % values.length];
  },

  channel: association(),

  repo: association()

});