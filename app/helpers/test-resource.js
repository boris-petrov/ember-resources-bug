import { tracked } from '@glimmer/tracking';
import { Resource } from 'ember-could-get-used-to-this';

export default class LiveSearchResource extends Resource {
  @tracked results;

  get value() {
    return this.results;
  }

  setup() {
    this.update();
  }

  update() {
    this.results = [this.args.named.counter];
  }
}
