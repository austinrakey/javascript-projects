//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    averageScore() {
        let avg = 0
        for (let i = 0; i < this.scores.length; i++) {
            ;
            avg = (avg + this.scores[i]);

        }
        avg = (avg / this.scores.length);
        return avg;
    }
    status() {
        let score = this.averageScore()
        let status = ''

        if (score >= 90) {
            status = 'Accepted'
        } else if ((score >= 80) && (score <= 89)) {
            status = 'Reserve'
        } else if ((score >= 70) && (score <= 79)) {
            status = 'Probationary'
        } else if (score < 70)
            status = 'Rejected'

        return status

    }
}

let bbear = new CrewCandidate("Bubba Bear", 135 + " kg", [88, 85, 90]);
let maltese = new CrewCandidate("Merry Maltese", 1.5 + " kg", [93, 88, 97]);
let gator = new CrewCandidate("Glad Gator", 225 + " kg", [75, 78, 62]);
console.log(bbear);

bbear.addScore(83)

console.log(bbear);

console.log(`${bbear.name} earned an average test score of ${bbear.averageScore()} and has a status of ${bbear.status()}`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

// gator.addScore(100)
// gator.addScore(100)
// gator.addScore(100)
// gator.addScore(100)
// gator.addScore(100)
// gator.addScore(100)

console.log(gator.averageScore())

while (gator.averageScore() < 90){
    gator.addScore(100)
}

console.log(gator.averageScore())