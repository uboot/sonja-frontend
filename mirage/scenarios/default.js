export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('ecosystem', 2).forEach((ecosystem) => {
    server.createList('profile', 4, { ecosystem }),
      server.createList('repo', 2, { ecosystem }).forEach((repo) => {
        server.createList('commit', 2, { repo }).forEach((commit) => {
          server.createList('build', 4, { 
            ecosystem,
            commit,
            missing_recipes: server.createList('recipe', 1),
            missing_packages: server.createList('package', 1)
          });
        });
      }),
      server.createList('recipe', 1, { ecosystem }).forEach((recipe) => {
        server
          .createList('recipe-revision', 1, { recipe })
          .forEach((recipe_revision) => {
            server.createList('package', 2, { recipe_revision });
          });
      });
    server.createList('channel', 3, { ecosystem });
  });
  server.createList('user', 2);
}
