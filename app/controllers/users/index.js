import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class UsersIndexController extends Controller {
  @service currentUser;
}
