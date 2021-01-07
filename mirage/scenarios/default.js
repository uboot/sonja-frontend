export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('ecosystem', 2).forEach(ecosystem => {
    server.createList('repo', 3, { ecosystem })
  })
}
