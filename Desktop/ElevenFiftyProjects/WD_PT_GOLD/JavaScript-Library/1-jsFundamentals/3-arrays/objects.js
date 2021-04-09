//objects
/*
let netflix = {
    id: 9,
    name: "vampire diaries",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: 'pilot'
                }, {
                    episode: 2,
                    episodeName: "meeting"
                }, {
                    episode: 3,
                    episodeName: "falling"
                },
                {
                    episode: 4,
                    episodeName: "finding out"
                },
                {
                    episode: 5,
                    episodeName: "the brother"
                },
                {
                    episode: 6,
                    episodeName: 'evil'
                },
                {
                    episode: 7,
                    episodeName: "making friends"
                },
                {
                    episode: 8,
                    episodeName: "the party"
                },
                {
                    episode: 9,
                    episodeName: "deciding"
                },
                {
                    episode: 10,
                    episodeName: "all my friends are dying"
                },
                {
                    episode: 11,
                    episodeName: "all my friends are dead"
                }
            ]
        }
    },
    season2: {},
    season3: {}
}

console.log(netflix);
console.log(netflix.season1);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);
console.log(netflix.season1.seasonInfo.episodeInfo[7].episode);
console.log(netflix.season1.seasonInfo.episodeInfo[7].episodeName);

*/

//JSON - Javascript object notation 
//as we send and receive objects across the web - we need
//standards for communicating that
//sent as text or string across the web then converted back to an object

//json methods


varjson = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}

let spaceJam = {
        toonSquad: {
            human: 'Michael Jordan',
            rabbit1: 'Bugs Bunny',
            rabbit2: 'Lola Bunny',
            duck: 'Daffy Duck',
            tDevil: 'Tasmanian Devil',
            bird: 'Tweety',
            cat: 'Sylvester',
            pig: 'Porky Pig'
        },
        monstars: {
            0: 'Bupkus',
            1: 'Bang',
            2: 'Nawt',
            3: 'Pound',
            4: 'Blanko'
        },
        nbaPlayers: {
            phoenixSuns: 'Charles Barkley',
            newJerseyNets: 'Shawn Bradley',
            newYorkNicks: 'Patrick Ewing',
            charlotteHornets1: 'Larry Johnson',
            charlotteHornets2: 'Muggsy Bogues'
        }
    }
    /*
    console.log(Object.keys(spaceJam));
    console.log(Object.keys(spaceJam.toonSquad));
    console.log(Object.keys(spaceJam.toonSquad).toString()); //converts array to string
    */

console.log(Object.values(spaceJam));

let garden = {
    vegetable: "zucchini",
    fruit: "tomato",
    water: true,
    sun: true,
    size: 10
}

console.log(garden.vegetable);
let incoming = "vegetable";
console.log(garden.incoming); //this will return undefined becase you cant change the name and look for it
//at least not in this way
console.log(garden[incoming]);
//this works because now it is an array

let baking = {}; //empty object
baking[temp] = "put it in the oven";
console.log(baking.temp);