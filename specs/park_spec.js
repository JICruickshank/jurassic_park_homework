var assert = require("assert");
var Park = require("../park.js");
var Dinosaur = require("../dinosaur.js");

describe("Park", function() {
  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur("Velociraptor", 3);
    dinosaur2 = new Dinosaur("T-Rex", 1);
    dinosaur3 = new Dinosaur("Triceratops", 2);
  })

  it('park enclosure is empty', function() {
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('add dinosaur', function() {
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosure.length, 1);
  })

  // it('remove dinosaurs by type', function() {
  //   park.addDinosaur(dinosaur);
  //   park.addDinosaur(dinosaur2);
  //   park.addDinosaur(dinosaur3);
  //   assert.strictEqual(park.enclosure.includes(dinosaur), true);
  //   assert.strictEqual(park.enclosure.length, 3);
  //   park.removeByType("Velociraptor");
  //   assert.strictEqual(park.enclosure.includes(dinosaur), false);
  //   assert.strictEqual(park.enclosure.length, 2);
  // })

  it('get all with offspring of more than 2', function() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    assert.strictEqual(park.twoPlusOffSpring(2).length, 1);
  })
})
