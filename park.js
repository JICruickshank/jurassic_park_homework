var Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

// Park.prototype.removeByType = function (type) {
//   for(let dinosaur of this.enclosure) {
//     if(dinosaur.type === type) {
//       let indexToRemove = this.enclosure.indexOf(dinosaur);
//     }
//     else {
//       indexToRemove = -1;
//     }
//   }
//   if(indexToRemove > -1) {
//     this.enclosure.splice(indexToRemove, 1);
//   }
// };

Park.prototype.twoPlusOffSpring = function (min) {
  const result = this.enclosure.filter(dinosaur => dinosaur.offspring > min);
  return result;
};


module.exports = Park;
