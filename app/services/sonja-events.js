import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import ENV from 'sonja/config/environment';

export default class SonjaEventsService extends Service {
  @service store;
  @tracked payload;

  init() {
    super.init(...arguments);
    
    this.eventSource = new EventSource(`/${ENV.apiNamespace}/event/general`);
    let self = this;
    this.eventSource.addEventListener('update', async function(e) {
      let data = JSON.parse(e.data);
      let payload = {
        id: data.data.id,
        type: data.data.type
      };
      self.store.pushPayload(data);
      self.payload = payload;
    });
  }

  willDestroy() {
    this.eventSource?.close();
  }
}
