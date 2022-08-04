import Component from '@glimmer/component';

export default class BuildTreePackageComponent extends Component {
  get hasBuild() {
    return this.args.package.get('builds').length > 0;
  }

  get hasFailedBuild() {
    return this.build.status !== 'success';
  }

  get build() {
    return this.args.package.builds.sortBy('created').get('firstObject');
  }
}
