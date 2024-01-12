// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = (astronautCount * averageAstronautMassKg);
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg);
let maximMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
console.log(date);
console.log(time);

if (astronautCount <= 7) {
    console.log("Astronaut Count", astronautCount);
} else {
    console.log(astronautCount, "exceeds limits, launch scrubbed.");
    preparedForLiftOff = false;
}

if (astronautStatus = "ready") {
    console.log("Astronaut status", astronautStatus);
} else {
    console.log("Astronauts not ready, launch scrubbed.");
    preparedForLiftOff = false;
}

console.log("Crew mass", crewMassKg, 'kg');

if (totalMassKg < maximMassLimit) {
    console.log("Shuttle mass", totalMassKg, "kg");
} else {
    console.log(totalMassKg, "kg exceeds limit", maximMassLimit, "kg");
    preparedForLiftOff = false;
}

console.log("Total mass", totalMassKg, "kg");

if (fuelTempCelsius > -300 || fuelTempCelsius < -150) {
    console.log("Fuel temp:", fuelTempCelsius, "°C");
} else {
    console.log("Fuel temperature", fuelTempCelsius, ", °C not within tolerance, launch scrubbed.");
    preparedForLiftOff = false;
}

if (fuelLevel === "100%") {
    console.log("Fuel level:", fuelLevel);
} else {
    console.log("Fuel level inadequate.");
    preparedForLiftOff = false;
}

if (weatherStatus === "clear") {
    console.log("Weather status:", weatherStatus);
} else {
    console.log("Weather conditions outside tolerance, launch scrubbed.");
    preparedForLiftOff = false;
}

if (preparedForLiftOff === true) {
    console.log("All systems go! Initiating space shuttle launch sequence.");
    console.log("Have a safe trip Astronauts!");
} else {
    console.log("Launch aborted!");
}