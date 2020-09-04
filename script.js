function Animal (gender) {
  this.gender = gender ;
}

function mammals (gender)  {
  Animal.call(this.gender);
}

mammals.prototype = Object.create(Animal.prototype);
mammals.prototype.constructor = mammals;
mammals.prototype.getMilk = function () {
  if (this.gender == 'female') {
    console.log('give milk for survival');
  } else {
    console.log('oh, that not for the child')
   }
};

function Raccoon(gender) {
  mammals.call(this, gender);
}

function Fox(gender) {
  mammals.call(this, gender);
} 

function Squirrel() {
  mammals.call(this.gender)
}

Animal.prototype.run = function () {
  console.log("run");
};
Animal.prototype.bounce = function () {
  console.log("bounce");
};
Animal.prototype.crept = function () {
  console.log("crept up unnoticed");
};

Raccoon.prototype = Object.create(mammals.prototype);
Raccoon.prototype.constructor = Raccoon;
Raccoon.prototype.constructor = Raccoon;
Raccoon.prototype.steal = function() {
  console.log('often steal something');
};

Fox.prototype = Object.create(mammals.prototype);
Fox.prototype.constructor = Fox;
Fox.prototype.chase = function () {
Fox.prototype.steal = function() {
  console.log('barks');
  console.log("sly attacks");
  };  
};

Squirrel.prototype = Object.create(mammals.prototype);
Squirrel.prototype.constructor = Squirrel;
Squirrel.prototype.rip_off = function() {
  console.log('jump on your face')
}

const Wolverine = new Raccoon('male');
const Rogue = new Fox('male');
const Elektra = new Squirrel('female');

console.log(Wolverine);
Wolverine.crept();
Wolverine.steal();
Wolverine.run();
Rogue.getMilk();
Elektra.getMilk();
Elektra.rip_off();


