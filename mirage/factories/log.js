import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  logs(i) {
    let values = [
      'Start Linux build\nCompile...\nUpload',
      'Start Windows build\nCompile...\nUpload'
    ];

    return values[i % values.length];
  }

});
