'use strict';

import { sum, sumN } from '../src/Utils';
import * as utils from '../src/Utils';

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

  describe('#sumN()', () => {
    describe('when given 1 positive number', () => {
      let actual: number;

      beforeAll(() => {
        actual = sumN(1);
      });

      it('returns the number', () => expect(actual).toBe(1));
    });

    describe('when given 3 positive numbers', () => {
      let actual: number;

      beforeAll(() => {
        actual = sumN(1, 2, 3);
      });

      it('sums the numbers correctly', () => expect(actual).toBe(6));
    });

    describe('when given 9 positive numbers', () => {
      let actual: number;

      beforeAll(() => {
        actual = sumN(1, 2, 1, 1, 2, 1, 1, 2, 1);
      });

      it('sums the numbers correctly', () => expect(actual).toBe(12));
    });

    describe('when given 2 positive numbers', () => {
      let actual: number;
      let sumSpy;

      beforeAll(() => {
        sumSpy = jest.spyOn(utils, 'sum');
        sumSpy.mockImplementation((a, b) => 2);

        actual = sumN(1, 2, 3, 4);
      });

      afterAll(() => {
        jest.clearAllMocks();
      });

      it('sums the numbers correctly', () => expect(actual).toBe(2));
      it('should have been called 3 times', () => expect(sumSpy).toBeCalledTimes(3));
    });
  });
});
