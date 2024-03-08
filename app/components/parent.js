import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { use } from 'ember-could-get-used-to-this';
import TestResource from '../helpers/test-resource';

export default class ParentComponent extends Component {
  @tracked counter = 0;

  constructor() {
    super(...arguments);
    setTimeout(() => this.counter++, 1000)
  }

  @use
  results = new TestResource(() => ({ named: { counter: this.counter } }));
}
