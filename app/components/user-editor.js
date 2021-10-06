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
  },

  get read() {
    return this.getPermission('read');
  },

  set read(value) {
    this.setPermission('read', value);
    if (!value) {
      this.set('write', false);
    }
  },

  get write() {
    return this.getPermission('write');
  },

  set write(value) {
    this.setPermission('write', value);
    if (value) {
      this.set('read', true);
    } else {
      this.set('admin', false);
    }
  },

  get admin() {
    return this.getPermission('admin');
  },

  set admin(value) {
    this.setPermission('admin', value);
    if (value) {
      this.set('write', true);
    }
  },

  getPermission(permission) {
    return this.get('permissions').find((p) => p.permission == permission);
  },

  setPermission(permission, value) {
    const permissions = this.get('permissions');
    if (value && !this.getPermission(permission)) {
      permissions.push({
        permission: permission,
      });
    } else if (!value) {
      this.set(
        'permissions',
        permissions.filter((p) => p.permission != permission)
      );
    }
  },
});

export default class UserEditorComponent extends Component {
  constructor(...args) {
    super(...args);
    this.model = UserProxy.create(this.args.user);
  }

  @action
  async save() {
    await this.args.save();
  }
}
