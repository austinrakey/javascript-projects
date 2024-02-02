// Code your selectRandomEntry function here:
function selectRandomEntry(arr){
  let selection = Math.floor(Math.random()*arr.length);

  return arr[selection];
}

let selectedID = []
let idNumbers = [291, 414, 503, 599, 796, 890];

// for (i = 0; i < 3; i++){
//   selectedID[i] =+ selectRandomEntry(idNumbers)

// }

while (selectedID.length < 3) {
randNo = selectRandomEntry(idNumbers)
  if (!selectedID.includes(randNo)){
selectedID.push(randNo)
  }
}

console.log(selectedID);


// Code your buildCrewArray function here:
// let crew = []


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:


let crew = []

function buildCrewArray(arr){
  j = 0
  for (i = 0; i < animals.length; i++){
    if (arr.includes(animals[i].astronautID))
    crew.push(animals[i].name)
      j++
  }
  return crew
}

console.log(buildCrewArray(selectedID))


console.log(`'${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!'`)