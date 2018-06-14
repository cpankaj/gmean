const expect = require('chai').expect;
const gmean = require('../index');

describe('Geometrix Mean', function() {
    it('should calculate geometric mean', function() {
        let mean = gmean([1, 3, 9]);
        expect(mean).to.equal(3);
    });
    it('should calculate geometric mean for array with one number', function() {
        let mean = gmean([5]);
        expect(mean).to.equal(5);
    });
    it('should calculate mean for array with same numbers', function() {
        let mean = gmean([3, 3, 3, 3]);
        expect(Math.round(mean)).to.equal(3);
    });
});
