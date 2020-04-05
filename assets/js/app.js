var titleEL = document.querySelector(".TITLE");
var artistEL = document.querySelector(".ARTIST");
var randomNUMEL = document.querySelector(".randomNUM");
var goEL = document.querySelector(".GO");
var wholeEL = document.querySelector(".whole");
var checkFORMEL = document.querySelector(".CheckFORM");
var listSUBMITEL = document.querySelector("#listSUBMIT");
var mainCardEL = document.querySelector(".mainCard");
var tvscreenEL = document.querySelector("#tvscreen");

var songList1EL = document.querySelector("#songList1");
var songList2EL = document.querySelector("#songList2");
var songList3EL = document.querySelector("#songList3");

const colors = ["blue", "green", "orange"];

const songTITLES = [
  {
    title: "Goodbye1",
    artist: "Madonna1",
  },
  {
    title: "Goodbye2",
    artist: "Madonna2",
  },
  {
    title: "Goodbye3",
    artist: "Madonna3",
  },
  {
    title: "Goodbye4",
    artist: "Madonna4",
  },
  {
    title: "Goodbye5",
    artist: "Madonna5",
  },
  {
    title: "Goodbye6",
    artist: "Madonna6",
  },
];

const usedSongTITLES = [];

const songTITLES1 = [
    {
        title:  "autum leaves",
        artist: "standard"
        },
        {
        title:  "blame it on my youth",
        artist: "Jamie cullum"
        },
        {
        title:  "Blue in green",
        artist: "miles davis"
        },
        {
        title:  "come fly with me",
        artist: "frank sinatra"
        },
        {
        title:  "everybody loves somebody",
        artist: "dean martin"
        },
        {
        title:  "i can't get started with you",
        artist: "jamie cullum"
        },
        {
        title:  "in the wee small hours of the morning",
        artist: "frank sinatra"
        },
        {
        title:  "my favorite things",
        artist: "john coltrane"
        },
        {
        title:  "my funny valentine",
        artist: "chet baker"
        },
        {
        title:  "pure imagination",
        artist: "jamie cullum"
        },
        {
        title:  "rainy night in georgia",
        artist: "brooke benton"
        },
        {
        title:  "round midnight",
        artist: "carmen mcrae"
        },
        {
        title:  "strangers in the night",
        artist: "frank sinatra"
        },
        {
        title:  "the way you look tonight",
        artist: "tony bennnett"
        },
        {
        title:  "what a difference a day made",
        artist: "jamie cullum"
        }
        
];

const songTITLES2 = [
    {
        title:  "across the universe",
        artist: "beatles"
        },
        {
        title:  "ain't no sunshine",
        artist: "bill withers"
        },
        {
        title:  "allison",
        artist: "elvis costello"
        },
        {
        title:  "dock of the bay",
        artist: "otis redding"
        },
        {
        title:  "don't let me down",
        artist: "beatles"
        },
        {
        title:  "either way",
        artist: "wilco"
        },
        {
        title:  "feels like rain",
        artist: "buddy guy"
        },
        {
        title:  "fire and rain",
        artist: "james taylor"
        },
        {
        title:  "flesh no. 1 beetle dennis",
        artist: "robyn Hitchcock & the egyptians"
        },
        {
        title:  "fly me to the moon",
        artist: "frank sinatra"
        },
        {
        title:  "fool on the hill",
        artist: "beatles"
        },
        {
        title:  "get down on it",
        artist: "kool & the gang"
        },
        {
        title:  "gimme some loving / i'm a believer",
        artist: "steve winwood / monkees"
        },
        {
        title:  "glad & sorry",
        artist: "faces"
        },
        {
        title:  "golden lady",
        artist: "stevie wonder"
        },
        {
        title:  "gravity",
        artist: "john mayer"
        },
        {
        title:  "hallelujah",
        artist: "leonard cohen"
        },
        {
        title:  "heard it through the grapevine",
        artist: "marvin gaye/CCR"
        },
        {
        title:  "hey jude",
        artist: "beatles"
        },
        {
        title:  "how deep is your love",
        artist: "bee gees"
        },
        {
        title:  "how long",
        artist: "ace"
        },
        {
        title:  "i got a woman",
        artist: "ray charles"
        },
        {
        title:  "i shall be released",
        artist: "the band"
        },
        {
        title:  "i'd rather go blind",
        artist: "etta james"
        },
        {
        title:  "in my life",
        artist: "beatles"
        },
        {
        title:  "in repair",
        artist: "john mayer"
        },
        {
        title:  "in your atmosphere",
        artist: "john mayer"
        },
        {
        title:  "into the mystic",
        artist: "van morrison"
        },
        {
        title:  "just the two of us",
        artist: "bill withers"
        },
        {
        title:  "lean on me",
        artist: "bill withers"
        },
        {
        title:  "let's stay together",
        artist: "al green"
        },
        {
        title:  "living for the city",
        artist: "stevie wonder"
        },
        {
        title:  "lodi",
        artist: "ccr"
        },
        {
        title:  "long as i can see the light",
        artist: "ccr"
        },
        {
        title:  "lousiana 1927",
        artist: "randy newman"
        },
        {
        title:  "love & happiness",
        artist: "al green"
        },
        {
        title:  "the long and winding road",
        artist: "beatles"
        },
        {
        title:  "make you feel my love",
        artist: "bob dylan"
        },
        {
        title:  "maybe i'm amazed",
        artist: "paul mccartney"
        },
        {
        title:  "my girl",
        artist: "temptations"
        },
        {
        title:  "my way",
        artist: "frank sinatra"
        },
        {
        title:  "oh darling",
        artist: "beatles"
        },
        {
        title:  "passenger seat",
        artist: "death cab for cutie"
        },
        {
        title:  "pearl of the quarter",
        artist: "steely dan"
        },
        {
        title:  "peg",
        artist: "steely dan"
        },
        {
        title:  "people are strange",
        artist: "doors"
        },
        {
        title:  "photobooth",
        artist: "death cab for cutie" 
        },
        {
        title:  "proud mary",
        artist: "ccr"
        },
        {
        title:  "riders on the storm",
        artist: "doors"
        },
        {
        title:  "rikki don't lose that number",
        artist: "steely dan"
        },
        {
        title:  "sara smile",
        artist: "hall & oates"
        },
        {
        title:  "secret o life",
        artist: "james taylor"
        },
        {
        title:  "slow dancing in a burning room",
        artist: "john mayer"
        },
        {
        title:  "still",
        artist: "ben folds"
        },
        {
        title:  "still crazy after all these years",
        artist: "paul simon"
        },
        {
        title:  "such a night",
        artist: "dr john"
        },
        {
        title:  "takin it to the streets",
        artist: "michael mcdonald/doobies"
        },
        {
        title:  "tell me why",
        artist: "neil young"
        },
        {
        title:  "that's how i got to Memphis",
        artist: "tom hall"
        },
        {
        title:  "let's get it on",
        artist: "marvin gaye" 
        },
        {
        title:  "valerie",
        artist: "steve winwood"
        },
        {
        title:  "war of my life",
        artist: "john mayer"
        },
        {
        title:  "who's gonna save my soul?",
        artist: "gnarls barkley"
        },
        {
        title:  "will the circle be unbroken?",
        artist: "traditional"
        },
        {
        title:  "wind cries mary",
        artist: "jimi hendrix"
        },
        {
        title:  "with or without you",
        artist: "u2"
        },
        {
        title:  "you really got a hold on me",
        artist: "smokey robinson"
        }
];

const songTITLES3 = [
    {
        title:  "Auld lang syne",
        artist: "traditional"
        },

        {
        title:  "This Christmas",
        artist: "Donny Hathaway"
        },

        {
        title:  "I think we killed santa",
        artist: "luckyhalfspeed original!"
        },

        {
        title:  "Where ya gonna go after Christmas",
        artist: "Robert Ledet/dirty santa"
    },
    {
        title:  "Finally here",
        artist: "grip johnson"
    },
        {
        title:  "Santa claus is coming to town",
        artist: "traditional"
        },
        {
        title:  "Christmastime is here",
        artist: "vince guaraldi"
        },
        {
        title:  "peanuts medley",
        artist: "vince guaraldi"
        },
        {
        title:  "mele kalikimaka",
        artist: "bing Crosby"
        },
        {
        title:  "also sprach zathursa 2001",
        artist: "Richard strauss"
        },
        {
        title:  "wonderful christmastime",
        artist: "paul mccartney"	
        }
        
];

const usedSongLISTs = ["songTITLES3", "songTITLES1", "songTITLES2"];

spin = () => {
  setTimeout(selector, 1000);
};

var spinCOUNT = 0;
var spinMAX = 10;

selector = () => {
  var songPICK = Math.floor(Math.random() * 6);
  randomNUMEL.innerHTML = songPICK;

  titleEL.innerHTML = usedSongTITLES[songPICK].title;
  artistEL.innerHTML = usedSongTITLES[songPICK].artist;

  var colorPICK = Math.floor(Math.random() * 3);

  mainCardEL.style.backgroundColor = colors[colorPICK];

  if (spinCOUNT <= spinMAX) {
    spinCOUNT++;
    spin();
  } else {
    spinCOUNT = 0;
    console.log("DONE");
  }
};

listMAKER = () => {
  console.log(songList1EL.checked);
  if (songList1EL.checked === true) {
    for (let i = 0; i < songTITLES1.length; i++) {
      usedSongTITLES.push(songTITLES1[i]);
    }
  } else {
    console.log("fail-1");
  }
  if (songList2EL.checked === true) {
    for (let i = 0; i < songTITLES2.length; i++) {
      usedSongTITLES.push(songTITLES2[i]);
    }
  } else {
    console.log("fail-2");
  }
  if (songList3EL.checked === true) {
    for (let i = 0; i < songTITLES3.length; i++) {
      usedSongTITLES.push(songTITLES3[i]);
    }
  } else {
    console.log("fail-3");
  }
  console.log(usedSongTITLES);
};

listSUBMITEL.addEventListener("click", function () {
  usedSongTITLES.length = 0;
  listMAKER();
});

document.addEventListener("keydown", function () {
  function keyCode(event) {
    var x = event.keyCode;
    if (x == 32) {
      spin();
      checkFORMEL.style.zIndex = 0;
      checkFORMEL.style.opacity = 0;
    } else if (x == 9) {
      checkFORMEL.classList.toggle("show");
      checkFORMEL.style.zIndex = 3;
      checkFORMEL.style.opacity = 1;

      mainCardEL.style.backgroundColor = "blue";
      titleEL.innerHTML = "";
      artistEL.innerHTML = "";
    }
  }

  keyCode(event);
});
