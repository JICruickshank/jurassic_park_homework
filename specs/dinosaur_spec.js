var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {
  beforeEach(function() {
    dinosaur = new Dinosaur("T-Rex", 2);
  })

  it('dinosaur has a type', function() {
    assert.strictEqual(dinosaur.type, "T-Rex");
  })

  it('find dinosaur offspring', function() {
    assert.strictEqual(dinosaur.offspring, 2);
  })

})
