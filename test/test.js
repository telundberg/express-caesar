var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');
var http = require('http');


describe('/', function() {
  var server = require('../bin/www');

  beforeEach(function () {
    server
  });

  it('should return 200', function(done) {
    http.get('http://localhost:3000/', function(res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});
