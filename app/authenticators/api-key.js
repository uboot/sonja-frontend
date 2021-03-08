import Base from 'ember-simple-auth/authenticators/base';
import { fetch } from 'fetch'

export default class ApiKeyAuthenticator extends Base{
  restore(data) {
    return fetch("/api/v1/restore", {
      method: "POST",
      body: data,
      credentials: 'include'
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("not authenticated");
      }
    });
  }

  authenticate(user, password) {
    return fetch("/api/v1/login", {
      method: "POST",
      body: { user: user, password: password },
      credentials: 'include'
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("not authenticated");
      }
    });
  }

  invalidate(data) {
    return fetch("/api/v1/logout", {
      method: "POST",
      body: data,
      credentials: 'include'
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("failed to log out");
      }
    });
  }
}
