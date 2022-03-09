import Model, { attr } from '@ember-data/model';
import Validator from 'ember-model-validator/decorators/model-validator';

@Validator
export default class BuildModel extends Model {
  @attr user_name;
  @attr first_name;
  @attr last_name;
  @attr email;
  @attr password;
  @attr old_password;
  @attr permissions;

  get read() {
    return this.getPermission('read');
  }

  set read(value) {
    this.setPermission('read', value);
    if (!value) {
      this.set('write', false);
    }
  }

  get write() {
    return this.getPermission('write');
  }

  set write(value) {
    this.setPermission('write', value);
    if (value) {
      this.set('read', true);
    } else {
      this.set('admin', false);
    }
  }

  get admin() {
    return this.getPermission('admin');
  }

  set admin(value) {
    this.setPermission('admin', value);
    if (value) {
      this.set('write', true);
    }
  }

  getPermission(permission) {
    return this.get('permissions').find((p) => p.permission == permission);
  }

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
  }

  validations = {
    user_name: {
      presence: true
    },
    password: {
      match: {
        attr: 'retype_password',
        message: 'passwords must match',
      }
    }
  }
}
