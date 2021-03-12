import Base from 'ember-simple-auth/authenticators/base';
import { fetch } from 'fetch'

export default class ApiKeyAuthenticator extends Base{
  restore(data) {
    return fetch("/api/v1/restore", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'same-origin'
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("not authenticated");
      }
    });
  }

  authenticate(user, password) {
    let data =  { user: user, password: password };
    return fetch("/api/v1/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'same-origin'
    }).then(function(response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject("failed to log out");
      }
    });
  }
}
