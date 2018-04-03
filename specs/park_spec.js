var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {
  beforeEach(function() {
    park = new Park();
  })

  it('park enclosure is empty', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })
})
