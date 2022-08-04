import Component from '@glimmer/component';

export default class BuildTreeRecipeNodeComponent extends Component {
  get hasRevision() {
    return this.args.recipe.get('current_revision.revision') != null;
  }

  get revision() {
    return this.args.recipe.get('current_revision');
  }
}
