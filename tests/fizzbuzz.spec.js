import { expect } from 'chai';
import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('should return `Fizz` when the number is divisible by 3.', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when the number is divisible by 5.', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when the number is divisible by 3 and 5.', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('should return `number` when the number is non-divisible.', () => {
    expect(FizzBuzz(92)).to.be.equal(92);
  });

  it('should return `0` when the number is zero.', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
