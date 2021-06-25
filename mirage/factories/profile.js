import { Factory } from 'ember-cli-mirage';

export default Factory.extend({

  name(i) {
    let values = [ 'Windows Debug', 'Windows Release', 'GCC9 Debug', 'GCC9 Release' ];

    return values[i % values.length];
  },
  
  container(i) {
    let values = [ 'registry.azurecr.io/msvc15:latest', 'uboot/gcc9:latest' ];

    return values[Math.floor(i/2) % values.length];
  },

  docker_user(i) {
    let values = [ 'user', '' ];

    return values[Math.floor(i/2) % values.length];
  },

  docker_password(i) {
    let values = [ 'paSSw0rd', '' ];

    return values[Math.floor(i/2) % values.length];
  },

  settings(i) {
    let os = [
      {
        key: "os",
        value: "Windows"
      },
      {
        key: "os",
        value: "Linux"
      }
    ];

    let buildType = [
      {
        key: "build_type",
        value: "Debug"
      },
      {
        key: "build_type",
        value: "Release"
      }
    ];

    return [
      os[Math.floor(i/2) % os.length],
      buildType[i % buildType.length]
    ];
  },

  options(i) {
    let shared = [
      {
        key: "base:shared",
        value: "True"
      },
      {
        key: "base:shared",
        value: "False"
      }
    ];

    return [
      shared[i % shared.length]
    ];
  },

  labels(i) {
    let labels = [
      {
        label: "embedded"
      },
      {
        label: "desktop"
      }
    ];

    return [
      labels[i % labels.length]
    ];
  }
  
});
