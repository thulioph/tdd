const { expect } = require('chai');
const calc = require('../src/calc');

describe('Calc', () => {
  context('Smoke Test', () => {
    it('should exist the calc lib.', () => {
      expect(calc).to.be.exist;
    });

    it('should exist the method `sum`.', () => {
      expect(calc.sum).to.be.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exist the method `sub`.', () => {
      expect(calc.sub).to.be.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exist the method `mult`.', () => {
      expect(calc.mult).to.be.exist;
      expect(calc.mult).to.be.a('function');
    });

    it('should exist the method `div`.', () => {
      expect(calc.div).to.be.exist;
      expect(calc.div).to.be.a('function');
    });
  });

  context('Sum method', () => {
    it('should return 4 when `sum(2,2)`', () => {
      const sum = calc.sum(2, 2);
      expect(sum).to.be.equal(4);
    });

    it('should return 2 when `sub(4,2)`', () => {
      const sub = calc.sub(4, 2);
      expect(sub).to.be.equal(2);
    });

    it('should return -4 when `sub(6,10)`', () => {
      const sub = calc.sub(6, 10);
      expect(sub).to.be.equal(-4);
    });
  });

  context('Mult method', () => {
    it('should return 4 when `mul(2,2)`', () => {
      const mult = calc.mult(2, 2);
      expect(mult).to.be.equal(4);
    });
  });

  context('Div method', () => {
    it('should return 2 when `div(4,2)`', () => {
      const div = calc.div(4, 2);
      expect(div).to.be.equal(2);
    });

    it('should return `a message` when try to divide by zero.', () => {
      const div = calc.div(2, 0);
      const str = "It's impossible to divide something by zero.";

      expect(div).to.be.equal(str);
    });
  });
});
