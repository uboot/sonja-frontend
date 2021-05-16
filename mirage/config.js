import { Response } from 'miragejs';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://www.ember-cli-mirage.com/docs/route-handlers/shorthands
  */

  this.namespace = '/api/v1';
  
  this.get('/build/:id');
  this.patch('/build/:id');

  this.get('/commit/:id');

  this.post('/channel');
  this.delete('/channel/:id');
  this.get('/channel/:id');
  this.patch('/channel/:id');

  this.get('/ecosystem');
  this.post('/ecosystem');
  this.delete('/ecosystem/:id');
  this.get('/ecosystem/:id');
  this.patch('/ecosystem/:id');
  this.get('/ecosystem/:id/build', (schema, request) => {
    return schema.ecosystems.find(request.params.id).builds;
  });
  this.get('/ecosystem/:id/repo', (schema, request) => {
    return schema.ecosystems.find(request.params.id).repos;
  });
  this.get('/ecosystem/:id/recipe', (schema, request) => {
    return schema.ecosystems.find(request.params.id).recipes;
  });

  this.get('/log/:id');

  this.post('/login', () => {
    //return new Response(401);
    return { user: 'user' };
  });

  this.get('/package/:id');

  this.get('/recipe/:id');

  this.post('/restore', () => {
    return { user: 'user' };
  });

  this.post('/logout', () => {
    return {};
  });

  this.post('/profile');
  this.delete('/profile/:id');
  this.get('/profile/:id');
  this.patch('/profile/:id');

  this.post('/repo');
  this.delete('/repo/:id');
  this.get('/repo/:id');
  this.patch('/repo/:id');
  this.get('/repo/:id/commit', (schema, request) => {
    return schema.repos.find(request.params.id).commits;
  });
}
