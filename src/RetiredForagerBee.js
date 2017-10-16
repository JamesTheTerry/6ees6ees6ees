class RetiredForagerBee extends ForagerBee {
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  forage(treasure) {
    return 'I am too old, let me play cards instead';
  }

  gamble(treasure) {
    this.treasureChest.push(treasure)
  }
};

// 
// var RetiredForagerBee = function() {
//   ForagerBee.call(this);
//   this.age = 40;
//   this.job = 'gamble';
//   this.canFly = false;
//   this.color = 'grey';
// };
//
// RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
// RetiredForagerBee.prototype.constructor = RetiredForagerBee;
//
// RetiredForagerBee.prototype.forage = function(treasure) {
//   return 'I am too old, let me play cards instead';
// };
//
// RetiredForagerBee.prototype.gamble = function(treasure) {
//   this.treasureChest.push(treasure)
// };
