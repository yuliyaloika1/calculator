const calculator = require('../../app/calculator');
const {expect} = require('chai');

describe('calculator', function() {
  describe('add()', function() {
    it('should add 2 numbers together', function() {
      expect(calculator.add(1, 4)).to.equal(5);
    });
  });
  describe('multiply()', function() {
    it('should multiply 2 numbers together', function() {
      expect(calculator.multiply(1, 4)).to.equal(5);
    });
  });
});