'use strict';

import { sum } from '../src/Utils';

describe('utils', () => {
  describe('#sum()', () => {
    describe('when given 2 positive numbers', () => {
      let actual: number;

      beforeAll(() => {
        actual = sum(2, 3);
      });

      it('should return a number', () => expect(actual).toEqual(expect.any(Number)));
      it('should add the numbers correctly', () => expect(actual).toEqual(5));
    });
  });
});
