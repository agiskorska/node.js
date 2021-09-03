const formatFullname = require('./formatFullname');
const expect = require('chai').expect;


describe('formatFullname', () => {
  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" has length 0', () => {
    expect(formatFullname('')).to.equal('Error');
  });
  
  it('should return an error if more than 1 space', () => {
    expect(formatFullname('abc')).to.equal('Error');
    expect(formatFullname('abc  efg')).to.equal('Error');
    expect(formatFullname('abc efg ijk')).to.equal('Error');
    expect(formatFullname(' abc efg')).to.equal('Error');
  })
});