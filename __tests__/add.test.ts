import { add } from '../src/add';

describe('Add Function', () => {
  test('it should add two values', () => {
    const result = 38;
    
    expect(add(19, 19)).toBe(result);
  });
});
