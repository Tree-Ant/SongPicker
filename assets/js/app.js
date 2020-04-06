var titleEL = document.querySelector(".TITLE");
var artistEL = document.querySelector(".ARTIST");
var randomNUMEL = document.querySelector(".randomNUM");
var goEL = document.querySelector(".GO");
var wholeEL = document.querySelector(".whole");
var checkFORMEL = document.querySelector(".CheckFORM");
var mainCardEL = document.querySelector(".mainCard");
var tvscreenEL = document.querySelector("#tvscreen");
var BGsEL = document.querySelector("#BG");

var listSUBMITEL = document.querySelector("#listSUBMIT");
var settingsEL = document.querySelector("#settings");
var channelChangeEL = document.querySelector("#changeChannel");



var songList1EL = document.querySelector("#songList1");
var songList2EL = document.querySelector("#songList2");
var songList3EL = document.querySelector("#songList3");
var songList4EL = document.querySelector("#songList4");

const BGs = [
    "./assets/imgs/BGs/asparagus.jpg", "./assets/imgs/BGs/axe.jpg	", "./assets/imgs/BGs/backgrounds.jpg", "./assets/imgs/BGs/banana.jpg", "./assets/imgs/BGs/baseballman.jpg", "./assets/imgs/BGs/bass.jpg", "./assets/imgs/BGs/beer.jpg", "./assets/imgs/BGs/bike.jpg", "./assets/imgs/BGs/bird.jpg	", "./assets/imgs/BGs/camera.jpg", "./assets/imgs/BGs/casket.jpg", "./assets/imgs/BGs/chess.jpg", "./assets/imgs/BGs/chicken.jpg", "./assets/imgs/BGs/clav.jpg", "./assets/imgs/BGs/coffee.jpg", "./assets/imgs/BGs/contractor.jpg", "./assets/imgs/BGs/corn.jpg", "./assets/imgs/BGs/cowbell.jpg", "./assets/imgs/BGs/cp70.jpg", "./assets/imgs/BGs/drill.jpg", "./assets/imgs/BGs/drums.jpg", "./assets/imgs/BGs/duck.jpg", "./assets/imgs/BGs/elephant.jpg", "./assets/imgs/BGs/evilrob.jpg", "./assets/imgs/BGs/farfisa.jpg", "./assets/imgs/BGs/fieri.jpg", "./assets/imgs/BGs/fireplace.jpg", "./assets/imgs/BGs/footballplayer.jpg", "./assets/imgs/BGs/garbage.jpg", "./assets/imgs/BGs/greenonions.jpg", "./assets/imgs/BGs/hammond.jpg", "./assets/imgs/BGs/harold.jpg", "./assets/imgs/BGs/hatchet.jpg", "./assets/imgs/BGs/hotdog.jpg", "./assets/imgs/BGs/ketchup.jpg", "./assets/imgs/BGs/knife.jpg", "./assets/imgs/BGs/lambo.jpg", "./assets/imgs/BGs/martini.jpg", "./assets/imgs/BGs/mic.jpg", "./assets/imgs/BGs/monkey.jpg", "./assets/imgs/BGs/nickcage.jpg", "./assets/imgs/BGs/ps3knockoffcontroller.jpg", "./assets/imgs/BGs/regulardog.jpg", "./assets/imgs/BGs/rhodes.jpg", "./assets/imgs/BGs/rob.jpg", "./assets/imgs/BGs/robtrent.jpg", "./assets/imgs/BGs/sax.jpg", "./assets/imgs/BGs/shovel.jpg", "./assets/imgs/BGs/spider.jpg", "./assets/imgs/BGs/straightblue.jpg", "./assets/imgs/BGs/sword.jpg", "./assets/imgs/BGs/trentwater.jpg", "./assets/imgs/BGs/twoaxes.jpg", "./assets/imgs/BGs/watch.jpg", "./assets/imgs/BGs/waterbottle.jpg", "./assets/imgs/BGs/weight.jpg", "./assets/imgs/BGs/whiskey.jpg", "./assets/imgs/BGs/wurly.jpg" 
];

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
    title: "autum leaves",
    artist: "standard",
  },
  {
    title: "blame it on my youth",
    artist: "Jamie cullum",
  },
  {
    title: "Blue in green",
    artist: "miles davis",
  },
  {
    title: "come fly with me",
    artist: "frank sinatra",
  },
  {
    title: "everybody loves somebody",
    artist: "dean martin",
  },
  {
    title: "i can't get started with you",
    artist: "jamie cullum",
  },
  {
    title: "in the wee small hours of the morning",
    artist: "frank sinatra",
  },
  {
    title: "my favorite things",
    artist: "john coltrane",
  },
  {
    title: "my funny valentine",
    artist: "chet baker",
  },
  {
    title: "pure imagination",
    artist: "jamie cullum",
  },
  {
    title: "rainy night in georgia",
    artist: "brooke benton",
  },
  {
    title: "round midnight",
    artist: "carmen mcrae",
  },
  {
    title: "strangers in the night",
    artist: "frank sinatra",
  },
  {
    title: "the way you look tonight",
    artist: "tony bennnett",
  },
  {
    title: "what a difference a day made",
    artist: "jamie cullum",
  },
];

const songTITLES2 = [
  {
    title: "across the universe",
    artist: "beatles",
  },
  {
    title: "ain't no sunshine",
    artist: "bill withers",
  },
  {
    title: "allison",
    artist: "elvis costello",
  },
  {
    title: "dock of the bay",
    artist: "otis redding",
  },
  {
    title: "don't let me down",
    artist: "beatles",
  },
  {
    title: "either way",
    artist: "wilco",
  },
  {
    title: "feels like rain",
    artist: "buddy guy",
  },
  {
    title: "fire and rain",
    artist: "james taylor",
  },
  {
    title: "flesh no. 1 beetle dennis",
    artist: "robyn Hitchcock & the egyptians",
  },
  {
    title: "fly me to the moon",
    artist: "frank sinatra",
  },
  {
    title: "fool on the hill",
    artist: "beatles",
  },
  {
    title: "get down on it",
    artist: "kool & the gang",
  },
  {
    title: "gimme some loving / i'm a believer",
    artist: "steve winwood / monkees",
  },
  {
    title: "glad & sorry",
    artist: "faces",
  },
  {
    title: "golden lady",
    artist: "stevie wonder",
  },
  {
    title: "gravity",
    artist: "john mayer",
  },
  {
    title: "hallelujah",
    artist: "leonard cohen",
  },
  {
    title: "heard it through the grapevine",
    artist: "marvin gaye/CCR",
  },
  {
    title: "hey jude",
    artist: "beatles",
  },
  {
    title: "how deep is your love",
    artist: "bee gees",
  },
  {
    title: "how long",
    artist: "ace",
  },
  {
    title: "i got a woman",
    artist: "ray charles",
  },
  {
    title: "i shall be released",
    artist: "the band",
  },
  {
    title: "i'd rather go blind",
    artist: "etta james",
  },
  {
    title: "in my life",
    artist: "beatles",
  },
  {
    title: "in repair",
    artist: "john mayer",
  },
  {
    title: "in your atmosphere",
    artist: "john mayer",
  },
  {
    title: "into the mystic",
    artist: "van morrison",
  },
  {
    title: "just the two of us",
    artist: "bill withers",
  },
  {
    title: "lean on me",
    artist: "bill withers",
  },
  {
    title: "let's stay together",
    artist: "al green",
  },
  {
    title: "living for the city",
    artist: "stevie wonder",
  },
  {
    title: "lodi",
    artist: "ccr",
  },
  {
    title: "long as i can see the light",
    artist: "ccr",
  },
  {
    title: "lousiana 1927",
    artist: "randy newman",
  },
  {
    title: "love & happiness",
    artist: "al green",
  },
  {
    title: "the long and winding road",
    artist: "beatles",
  },
  {
    title: "make you feel my love",
    artist: "bob dylan",
  },
  {
    title: "maybe i'm amazed",
    artist: "paul mccartney",
  },
  {
    title: "my girl",
    artist: "temptations",
  },
  {
    title: "my way",
    artist: "frank sinatra",
  },
  {
    title: "oh darling",
    artist: "beatles",
  },
  {
    title: "passenger seat",
    artist: "death cab for cutie",
  },
  {
    title: "pearl of the quarter",
    artist: "steely dan",
  },
  {
    title: "peg",
    artist: "steely dan",
  },
  {
    title: "people are strange",
    artist: "doors",
  },
  {
    title: "photobooth",
    artist: "death cab for cutie",
  },
  {
    title: "proud mary",
    artist: "ccr",
  },
  {
    title: "riders on the storm",
    artist: "doors",
  },
  {
    title: "rikki don't lose that number",
    artist: "steely dan",
  },
  {
    title: "sara smile",
    artist: "hall & oates",
  },
  {
    title: "secret o life",
    artist: "james taylor",
  },
  {
    title: "slow dancing in a burning room",
    artist: "john mayer",
  },
  {
    title: "still",
    artist: "ben folds",
  },
  {
    title: "still crazy after all these years",
    artist: "paul simon",
  },
  {
    title: "such a night",
    artist: "dr john",
  },
  {
    title: "takin it to the streets",
    artist: "michael mcdonald/doobies",
  },
  {
    title: "tell me why",
    artist: "neil young",
  },
  {
    title: "that's how i got to Memphis",
    artist: "tom hall",
  },
  {
    title: "let's get it on",
    artist: "marvin gaye",
  },
  {
    title: "valerie",
    artist: "steve winwood",
  },
  {
    title: "war of my life",
    artist: "john mayer",
  },
  {
    title: "who's gonna save my soul?",
    artist: "gnarls barkley",
  },
  {
    title: "will the circle be unbroken?",
    artist: "traditional",
  },
  {
    title: "wind cries mary",
    artist: "jimi hendrix",
  },
  {
    title: "with or without you",
    artist: "u2",
  },
  {
    title: "you really got a hold on me",
    artist: "smokey robinson",
  },
];

const songTITLES3 = [
  {
    title: "Auld lang syne",
    artist: "traditional",
  },

  {
    title: "This Christmas",
    artist: "Donny Hathaway",
  },

  {
    title: "I think we killed santa",
    artist: "luckyhalfspeed original!",
  },

  {
    title: "Where ya gonna go after Christmas",
    artist: "Robert Ledet/dirty santa",
  },
  {
    title: "Finally here",
    artist: "grip johnson",
  },
  {
    title: "Santa claus is coming to town",
    artist: "traditional",
  },
  {
    title: "Christmastime is here",
    artist: "vince guaraldi",
  },
  {
    title: "peanuts medley",
    artist: "vince guaraldi",
  },
  {
    title: "mele kalikimaka",
    artist: "bing Crosby",
  },
  {
    title: "also sprach zathursa 2001",
    artist: "Richard strauss",
  },
  {
    title: "wonderful christmastime",
    artist: "paul mccartney",
  },
];

const songTITLES4 = [
  {
    title: "luckyhalfspeed theme",
    artist: "lucky halfspeed",
  },
  {
    title: "play for free",
    artist: "robert Ledet",
  },
  {
    title: "how long",
    artist: "bob hall",
  },
  {
    title: "new dress",
    artist: "thomas edmonds",
  },
  {
    title: "why are you laughing",
    artist: "trent stokes",
  },
  {
    title: "all that matters",
    artist: "Robert Ledet",
  },
  {
    title: "I think we killed santa",
    artist: "luckyhalfspeed",
  },
  {
    title: "this love is Halloween",
    artist: "luckyhalfspeed",
  },
  {
    title: "booty coming down",
    artist: "luckyhalfspeed",
  },
  {
    title: "beer and jesus",
    artist: "dan was",
  },
];
const usedSongLISTs = ["songTITLES3", "songTITLES1", "songTITLES2"];

spin = () => {
  setTimeout(selector, 250);
};

var spinCOUNT = 0;
var spinMAX = 14;

selector = () => {
  var songPICK = Math.floor(Math.random() * usedSongTITLES.length);
  randomNUMEL.innerHTML = songPICK;

  titleEL.innerHTML = usedSongTITLES[songPICK].title;
  artistEL.innerHTML = usedSongTITLES[songPICK].artist;

  var bgPICK = Math.floor(Math.random() * BGs.length);

  //   mainCardEL.style.backgroundImage = 'url(BGs[bgPICK])';
  console.log(BGs[bgPICK]);
  BGsEL.setAttribute("src", BGs[bgPICK]);

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
  if (songList4EL.checked === true) {
    for (let i = 0; i < songTITLES4.length; i++) {
      usedSongTITLES.push(songTITLES4[i]);
    }
  } else {
    console.log("fail-4");
  }
};

listSUBMITEL.addEventListener("click", function () {
  usedSongTITLES.length = 0;
  checkFORMEL.style.zIndex = 0;
  checkFORMEL.style.opacity = 0;
  listMAKER();
});

channelChangeEL.addEventListener("click", function () {
    spin();
      checkFORMEL.style.zIndex = 0;
      checkFORMEL.style.opacity = 0;
  });

settingsEL.addEventListener("click", function () {
    BGsEL.setAttribute("src", "./assets/imgs/BGs/straightblue.jpg");
    checkFORMEL.classList.toggle("show");
    checkFORMEL.style.zIndex = 8;
    checkFORMEL.style.opacity = 1;

    wholeEL.style.backgroundColor = "blue";
    titleEL.innerHTML = "";
    artistEL.innerHTML = "";
  });
  

document.addEventListener("keydown", function () {
  function keyCode(event) {
    var x = event.keyCode;
    if (x == 32) {
      spin();
      checkFORMEL.style.zIndex = 0;
      checkFORMEL.style.opacity = 0;
    } else if (x == 67) {
      BGsEL.setAttribute("src", "./assets/imgs/BGs/straightblue.jpg");
      checkFORMEL.classList.toggle("show");
      checkFORMEL.style.zIndex = 8;
      checkFORMEL.style.opacity = 1;

      wholeEL.style.backgroundColor = "blue";
      titleEL.innerHTML = "";
      artistEL.innerHTML = "";
    }
  }

  keyCode(event);
});

listMAKER();
