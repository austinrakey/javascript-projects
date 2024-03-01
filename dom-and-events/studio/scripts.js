// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    let takeOff = document.getElementById('takeoff')
    let status = document.getElementById('flightStatus')
    let height = document.getElementById('spaceShuttleHeight')
    let land = document.getElementById('landing')
    let abort = document.getElementById('missionAbort')
    let up = document.getElementById('up')
    let down = document.getElementById('down')
    let left = document.getElementById('left')
    let right = document.getElementById('right')
    let rocket = document.getElementById('rocket')

    takeOff.addEventListener('click', event => {
        if (confirm("Confirm that the shuttle is ready for liftoff") === true) {
            status.innerHTML = 'Shuttle in flight.'
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue'
            height.innerHTML = '10000'
        };        
    });

    land.addEventListener('click', event => {
       window.alert('The shuttle is landing. Landing gear engaged.');
       document.getElementById('shuttleBackground').style.backgroundColor = 'green'
       status.innerHTML = 'The shuttle has landed.'
       height.innerHTML = '0'
    });

    abort.addEventListener('click', event => {
        window.confirm('Confirm that you want to abort the mission.');
        document.getElementById('shuttleBackground').style.backgroundColor = 'green'
        status.innerHTML = 'Mission aborted.'
        height.innerHTML = '0'
     });

     up.addEventListener('click', event => {
        height.innerHTML = '10000';
        rocket.style.top += '50%';
     });







}


window.addEventListener("load", init);
