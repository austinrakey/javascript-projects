
let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function(num){
   let statement = ""  
    if (((num % 3) === 0) && ((num % 5) === 0) && ((num % 2) === 0)){
    statement = 'LaunchCode Rocks!'
    return statement
  } else if (((num % 3) !== 0) && ((num % 5) === 0) && ((num % 2) === 0)) {
    statement = 'Launch Rocks!'
  } else if (((num % 3) === 0) && ((num % 5) === 0) && ((num % 2) !== 0)) {
    statement = 'Code Rocks!'
  } else if (((num % 3) === 0) && ((num % 5) !== 0) && ((num % 2) === 0)) {
    statement = 'LaunchCode!'
  } else if (((num % 3) !== 0) && ((num % 5) === 0) && ((num % 2) !== 0)) {
    statement = 'Rocks!'
  } else if (((num % 3) === 0) && ((num % 5) !== 0) && ((num % 2) !== 0)) {
    statement = 'Code!'
  } else if (((num % 3) !== 0) && ((num % 5) !== 0) && ((num % 2) === 0)) {
    statement = 'Launch'
  } else {
    statement = "Rutabagas! That doesn't work."
}
return statement
}
}



module.exports = launchcode;

