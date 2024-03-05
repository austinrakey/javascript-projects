//TODO: Add Your Code Below
window.addEventListener("load", function() {
this.fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
    return response.json();
}).then(function(json) {
console.log(json)
const container = document.querySelector('#container');
for (astronaut of json){
container.innerHTML += `
<div class="astronaut">
<div class="bio">
    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
    <ul>
    <li>Hours in space: ${astronaut.hoursInSpace}</li>
    <li>Active: ${astronaut.active}</li>
    <li>Skills: ${astronaut.skills.join(", ")}</li>
    </ul>
</div>
<img class="avatar" src="${astronaut.picture}">
</div>`
};
});
});

