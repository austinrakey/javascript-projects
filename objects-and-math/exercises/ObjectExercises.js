let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy Jenkins",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};

let tardigrade = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.floor(Math.random()*11)}
};

let animalCrew = [superChimpOne, salamander, chimpTwo, dog, tardigrade];

function crewReports(obj) {
let report =   `${obj.name} is a ${obj.species}. They are ${obj.age} years old and ${obj.mass} kilograms. Their ID is ${obj.astronautID}.`
return report
}

console.log(crewReports(tardigrade))



function raceAnimals(arr) {
   let results = [], turns, moves
   for (let i = 0; i < animalCrew.length; i++) {
      let turns = 0;
      let moves = 0;
      // for (let j = 0; j < 20; j++) {
      //    moves += animalCrew[i].move();
      //    turns = j
      while(moves < 20){
         moves += animalCrew[i].move();
         turns++;
      }
results.push(`${animalCrew[i].name} took ${turns} turns to take 20 steps.`); 
   }
      
return results;

}

console.log(raceAnimals(animalCrew))



// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

