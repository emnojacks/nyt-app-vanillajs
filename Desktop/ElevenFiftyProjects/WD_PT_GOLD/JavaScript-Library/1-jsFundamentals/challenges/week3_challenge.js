/*
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix.season1.seasonInfo.episodeInfo[3].episode, netflix.season1.seasonInfo.episodeInfo[3].episodeName); 
*/

//function Teacher(firstName, lastName, className, isTenured) {
//this.firstName = "Mrs.";
//this.lastName = "Doubtfire";
//this.className = "How to Be a Lady";
//this.isTenured = true;

let teacher = new Object;

teacher.firstName = "Mrs.";
teacher.lastName = "Doubtfire";
teacher.className = "How to Be a Lady";
teacher.isTenured = true;

teacher.kind = function() {
    if (this.isTenured) {
        this.kind = "teach got tenure";
    } else {
        this.kind = "teach isn't tenured";
    }
}

console.log(teacher)