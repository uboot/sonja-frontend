import { Factory } from 'miragejs';

export default Factory.extend({
  github_secret() {
    return "0123456789abcdef";
  },
  
  public_ssh_key() {
    return `
      c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFDZHNqZmRzYWpmaWRzb2ZqZHNpZnZj
      eHZjeEFBQUFCM056YUMxeWMyRUFBQUFEQVFBQkFBQUNkc2pmZHNhamZpZHNvZmpkc2lmdmN4dmN4
      QUFBQUIzTnphQzF5YzJFQUFBQURBUUFCQUFBQ2RzamZkc2FqZmlkc29mamRzaWZ2Y3h2Y3g=
      `;
  },

  known_hosts() {
    return `
      Z2l0aHViLmNvbSwxNDAuODIuMTIxLjQgc3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBQkl3QUFBUUVBcTJBN
      2hSR21kbm05dFVEYk85SURTd0JLNlRiUWErUFhZUENQeTZyYlRyVHR3N1BIa2NjS3JwcDB5VmhwNUhkRUljS3
      I2cExsVkRCZk9MWDlRVXN5Q09WMHd6ZmpJSk5sR0VZc2RsTEppekhoYm4ybVVqdlNBSFFxWkVUWVA4MWVGekx
      RTm5QSHQ0RVZWVWg3VmZERVNVODRLZXptRDVRbFdwWExtdlUzMS95TWYrU2U4eGhIVHZLU0NaSUZJbVd3b0c2
      bWJVb1dmOW56cElvYVNqQit3ZXFxVVVtcGFhYXNYVmFsNzJKK1VYMkIrMlJQVzNSY1QwZU96UWdxbEpMM1JLc
      lRKdmRzakUzSkVBdkdxM2xHSFNaWHkyOEczc2t1YTJTbVZpL3c0eUNFNmdiT0RxblRXbGc3K3dDNjA0eWRHWE
      E4VkppUzVhcDQzSlhpVUZGQWFRPT0K
      `;
  },

  git_credentials() {
    return [
      {
        url: 'https://github.com',
        username: 'user',
        password: 'Passw0rd',
      },
      {
        url: 'https://gitlab.com',
        username: '',
        password: '123456',
      },
    ];
  },

  docker_credentials() {
    return [
      {
        server: '',
        username: 'user',
        password: 'Passw0rd',
      },
      {
        server: 'myregistry.azurecr.io',
        username: 'myregistry',
        password: '123456',
      },
    ];
  },
});
