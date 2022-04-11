import { discoverEmberDataModels } from "ember-cli-mirage";
import { createServer } from 'miragejs';
import ENV from 'sonja/config/environment';

export default function (config) {
  let finalConfig = {
    ...config,
    models: { ...discoverEmberDataModels(), ...config.models },
    routes() {
      this.namespace = `/${ENV.apiNamespace}`;

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

      this.post('/token', () => {
        //return new Response(401);
        return { 
          'access_token': '2',
          'token_type': 'bearer'
        };
      });

      this.get('/package/:id');

      this.get('/recipe/:id');
      this.get('/recipe/:id/revision', (schema, request) => {
        return schema.recipes.find(request.params.id).revisions;
      });
      this.get('/recipe_revision/:id');

      this.get('/process_repo/:id', () => {
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

      this.get('/user');
      this.post('/user');
      this.delete('/user/:id');
      this.get('/user/me', (schema, request) => {
        return schema.users.find('1');
      });
      this.get('/user/:id');
      this.patch('/user/:id');
    },
  };

  return createServer(finalConfig);
}
