import { renderComponent , expect } from '../test_helper';
import Counter from '../../src/counter';

describe('Counter' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Counter);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
