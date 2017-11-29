// `npm test -- --bail` (para no primeiro teste que falhar)
// `npm test -- --reporters` (para visualizar os tipos de reporter)
// `npm test -- --reporters=value` (para testar algum report em específico)

// content.skip (pula este teste)
// it.only (roda apenas este teste)

// alguns hooks que o mocha possui
// `before()`, `after()` - rodam UMA VEZ antes/depois de cada bloco
// `beforeEach()`, `afterEach()` - rodam TODAS AS VEZES antes/depois de cada bloco
// servem para evitar a repetição de algo em cada `it()`

// atenção a variável global `arr`
// dentro do describe eu consigo acessa-la

// Chai BDD assertions (responvável pelo `expect()`)
// http://chaijs.com/api/bdd/

// Mocha Reporters (responsável pelo `describe()`, hooks e `it()`)
// https://mochajs.org/#reporters

// ====

const { expect } = require('chai');

describe('Main', () => {
  let arr;

  context('Array test', () => {
    beforeEach(() => {
      arr = [1, 2, 3];
    });

    // (smoke test) - the minimum test to see if it works
    it('arr should be an array', () => {
      // verifica um tipo
      expect(arr).to.be.a('array');
    });

    it('should have a size of 4 when push another value to array.', () => {
      arr.push(4);

      // verifica um tamanho
      expect(arr).to.have.lengthOf(4);
    });

    it('should remove the value 3 when use pop in the array.', () => {
      arr.pop();

      // verifica se contém ou não contém
      expect(arr).to.not.include(3);
    });

    it('should have a size of 2 when pop a value from the array.', () => {
      arr.pop();

      // verifica um tamanho
      expect(arr).to.be.lengthOf(2);
    });

    it('should return true whem pop 3 from the array.', () => {
      // verificação booleana
      expect(arr.pop() === 3).to.be.true;
    });
  });
});
