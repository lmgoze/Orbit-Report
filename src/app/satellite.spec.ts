import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite("foo", "bar", "baz", "lur", false)).toBeTruthy();
  });

 
});
