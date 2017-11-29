import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/calc';

describe('Calc', () => {
  context('Smoke Test', () => {
    it('should exist the method `sum`.', () => {
      expect(sum).to.be.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method `sub`.', () => {
      expect(sub).to.be.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method `mult`.', () => {
      expect(mult).to.be.exist;
      expect(mult).to.be.a('function');
    });

    it('should exist the method `div`.', () => {
      expect(div).to.be.exist;
      expect(div).to.be.a('function');
    });
  });

  context('Sum method', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });

    it('should return 2 when `sub(4,2)`', () => {
      expect(sub(4, 2)).to.be.equal(2);
    });

    it('should return -4 when `sub(6,10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  context('Mult method', () => {
    it('should return 4 when `mul(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  context('Div method', () => {
    it('should return 2 when `div(4,2)`', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('should return `a message` when try to divide by zero.', () => {
      const str = "It's impossible to divide something by zero.";

      expect(div(2, 0)).to.be.equal(str);
    });
  });
});
