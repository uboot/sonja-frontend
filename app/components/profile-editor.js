import Component from '@glimmer/component';

const platforms = ['Linux', 'Windows'];

export default class ProfileEditorComponent extends Component {
  get platforms() {
    return platforms;
  }
}
