import { modifier } from 'ember-modifier';

export default modifier(function scrollToWhen(element, [scrollTo]) {
  if (scrollTo) {
    element.scrollIntoView();
  }
});
