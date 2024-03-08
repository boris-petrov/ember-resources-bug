import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { use } from 'ember-could-get-used-to-this';
import TestResource from '../helpers/test-resource';

export default class ChildComponent extends Component {
  get results2() {
    return this.args.results[0].toString();
  }
}
