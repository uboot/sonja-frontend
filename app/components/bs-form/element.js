import BsFormElement from 'ember-bootstrap/components/bs-form/element';
import { addObserver, removeObserver } from '@ember/object/observers';

export default class BsFormElementComponent extends BsFormElement {
  '__ember-bootstrap_subclass' = true;

  get errors() {
    return this.args.model.errors?.get(this.args.property)?.mapBy("message");
  }

  validate() {
    this.args.model.validate();
  }

  setupValidations() {
    addObserver(this.args.model, this.args.property, this, this.validate);
  }

  willDestroy() {
    removeObserver(this.args.model, this.args.property, this, this.validate);
  }
}
