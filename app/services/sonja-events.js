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
      self.store.pushPayload(data);
      self.payload = data;
    });
  }

  willDestroy() {
    this.eventSource?.close();
  }
}
