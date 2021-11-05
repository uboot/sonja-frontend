import { set } from '@ember/object';
import Component from '@glimmer/component';
import ObjectProxy from '@ember/object/proxy';
import { action } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  user_name: validator('presence', true),
  email: validator('format', { type: 'email' }),
  password: validator('length', { min: 4 }),
  retype_password: validator('confirmation', {
    on: 'password',
    message: 'Passwords do not match',
  }),
});

const UserProxy = ObjectProxy.extend(Validations, {
  init(user) {
    this._super(...arguments);
    set(this, 'content', user);
    this.first_name = user.first_name;
    this.last_name = user.last_name;
  },

  first_name: '',
  last_name: '',

  save() {
    this.content.first_name = this.first_name;
    this.content.last_name = this.last_name;
  },
});

export default class UserEditorComponent extends Component {
  constructor(...args) {
    super(...args);
    this.model = UserProxy.create(this.args.user);
  }

  @action
  async save() {
    this.model.save();
    await this.args.save();
  }
}
