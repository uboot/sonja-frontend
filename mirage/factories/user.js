import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  user_name(i) {
    let values = ['user', 'admin'];

    return values[i % values.length];
  },

  first_name(i) {
    let values = ['John', 'Linda'];

    return values[i % values.length];
  },

  last_name(i) {
    let values = ['Doe', 'Mayer'];

    return values[i % values.length];
  },

  email(i) {
    let values = ['j.doe@acme.com', 'l.mayer@acme.com'];

    return values[i % values.length];
  },

  permissions(i) {
    let values = [
      [
        {
          permission: 'read',
        },
        {
          permission: 'write',
        },
      ],
      [
        {
          permission: 'read',
        },
        {
          permission: 'write',
        },
        {
          permission: 'admin',
        },
      ],
    ];

    return values[i % values.length];
  },
});
