import BsForm from 'ember-bootstrap/components/bs-form';

export default class BsFormComponent extends BsForm {
  '__ember-bootstrap_subclass' = true;

  get hasValidator() {
    return !!this.model?.validations;
  }

  validate(model) {
    if (!this.model.validate()) {
      throw new Error();
    }
  }
}
