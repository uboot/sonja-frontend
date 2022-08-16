export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('ecosystem', 2).forEach((ecosystem) => {
    server.createList('profile', 4, { ecosystem });
    server.createList('repo', 2, { ecosystem }).forEach((repo) => {
      server.createList('commit', 2, { repo }).forEach((commit) => {
        server.createList('build', 4, {
          commit,
          missing_recipes: server.createList('recipe', 1),
          missing_packages: server.createList('package', 1)
        }).forEach((build) => {
          server.createList('run', 3, { build });
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

  server.createList('log-line', 25);

  let package_without_build = server.create('package', {
    recipe_revision: server.create('recipe_revision', {
      recipe: server.create('recipe', {
        name: 'core',
      })
    }),
    builds: [],
    requires: []
  });

  let package_with_failed_build = server.create('package', {
    recipe_revision: server.create('recipe_revision', {
      recipe: server.create('recipe', {
        name: 'libhello',
      })
    }),
    builds: server.createList('build', 1, {
      status: 'error',
      missing_packages: [package_without_build]
    }),
    requires: []
  });

  let package_with_requirement = server.create('package', {
    recipe_revision: server.create('recipe_revision', {
      recipe: server.create('recipe', {
        name: 'base',
      })
    }),
    builds: server.createList('build', 1, {
      status: 'success'
    }),
    requires: [package_without_build]
  });

  let recipe_without_revision = server.create('recipe', {
    name: 'common'
  });

  let recipe_with_package = server.create('recipe', {
    name: 'libcommon',
    current_revision: server.create('recipe_revision', {
      packages: [
        server.create('package', {
          builds: server.createList('build', 1, {
            status: 'error'
          })
        }),
        server.create('package', {
          package_id: '01234567897ea3aa060187bae41abbc9911dfdfd',
          builds: server.createList('build', 1, {
            status: 'error',
            missing_packages: [package_with_failed_build]
          })
        }),
      ]
    })
  });

  let recipe_with_revision = server.create('recipe', {
    name: 'libbase',
    current_revision: server.create('recipe_revision', {
      builds: server.createList('build', 1, {
        missing_packages: [package_with_failed_build]
      })
    }) 
  })

  let build = server.create('build', {
    status: 'success',
    package: server.create('package', {
      recipe_revision: server.create('recipe_revision', {
        recipe: server.create('recipe', {
          name: 'app',
        })
      }),
      requires: [package_with_requirement, package_without_build]
    })
  });

  let build_with_missing_package = server.create('build', {
    status: 'error',
    missing_packages: [package_with_failed_build]
  });

  let build_with_missing_recipe = server.create('build', {
    status: 'error',
    missing_recipes: [recipe_without_revision, recipe_with_revision, recipe_with_package]
  });

  server.create('build', {
    status: 'error',
    missing_packages: [
      server.create('package', {
        recipe_revision: server.create('recipe_revision', {
          recipe: server.create('recipe', {
            name: 'app2',
          })
        }),
        builds: [build_with_missing_package]
      }),
      server.create('package', {
        recipe_revision: server.create('recipe_revision', {
          recipe: server.create('recipe', {
            name: 'libhello2',
          })
        }),
        builds: [build_with_missing_recipe]
      }),
      server.create('package', {
        recipe_revision: server.create('recipe_revision', {
          recipe: server.create('recipe', {
            name: 'libhello3',
          })
        }),
        builds: [build]
      }),
    ]
  })
}
