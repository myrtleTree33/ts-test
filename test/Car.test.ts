import { Car } from '../src/Car';

describe('Car', () => {
  describe('#numWheels()', () => {
    describe('when called', () => {
      let actual: number;
      let car_proto_mock;

      beforeAll(() => {
        car_proto_mock = jest.spyOn(Car.prototype, 'getNumWheels');

        car_proto_mock.mockImplementation(() => 2);

        const car: Car = new Car(4);

        actual = car.getNumWheels();
      });

      it('should return number of wheels the car is instantiated with', () =>
        expect(actual).toBe(2));

      it('should do something', () => expect({ a: 'b' }).toEqual({ a: 'b' }));
    });
  });
});
