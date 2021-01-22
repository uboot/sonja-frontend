export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('ecosystem', 2).forEach(ecosystem => {
    server.createList('profile', 4, { ecosystem }),
    server.createList('repo', 2, { ecosystem }).forEach(repo => {
      server.createList('commit', 2, { repo }).forEach(commit => {
        server.createList('build', 4, { ecosystem, commit })
      })
    }),
    server.createList('channel', 3, { ecosystem })
  })
}
