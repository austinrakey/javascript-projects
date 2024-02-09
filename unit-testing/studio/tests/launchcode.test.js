// launchcode.test.js code:
const launchcode = require('../index.js');

describe("testing launchcode object", function(){
  it("key organization has value nonprofit", function() {
    expect(launchcode.organization).toEqual("nonprofit")
   });

  it("key executiveDirector has value Jeff", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff")
  });

  it("key percentageCoolEmployees has value 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100)
  });

  it("key programsOffered has values Web Development, Data Analysis, Liftoff", function() {
    // expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"])
    expect(launchcode.programsOffered).toContain("Web Development");
    expect(launchcode.programsOffered).toContain("Data Analysis");
    expect(launchcode.programsOffered).toContain("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3)
  });

  it("launchOutput returns", function() {

  expect(launchcode.launchOutput(2)).toEqual('Launch')
  expect(launchcode.launchOutput(3)).toEqual('Code!')
  expect(launchcode.launchOutput(5)).toEqual('Rocks!')
  expect(launchcode.launchOutput(6)).toEqual('LaunchCode!')
  expect(launchcode.launchOutput(15)).toEqual('Code Rocks!')
  expect(launchcode.launchOutput(10)).toEqual('Launch Rocks!')
  expect(launchcode.launchOutput(7)).toEqual("Rutabagas! That doesn't work.")
  // Write your unit tests here!
  
});

});
