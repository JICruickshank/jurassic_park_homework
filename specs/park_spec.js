var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {
  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur("Velociraptor", 3);
  })

  it('park enclosure is empty', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('add dinosaur', function() {
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosure.length, 1);
  })
})
