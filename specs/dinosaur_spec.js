var assert = require("assert");
var Dinosaur = require("../dinosaur.js");

describe("Dinosaur", function() {
  beforeEach(function() {
    dinosaur = new Dinosaur();
  })

  it('dinosaur has a type', function() {
    assert.strictEqual(dinosaur.type, "T-Rex");
  })

})
