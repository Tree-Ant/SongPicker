var titleEL = document.querySelector('.TITLE');
var artistEL = document.querySelector('.ARTIST');
var randomNUMEL = document.querySelector('.randomNUM');
var goEL = document.querySelector('.GO');
var wholeEL = document.querySelector('.whole');
var checkFORMEL = document.querySelector('.CheckFORM');
var listSUBMITEL = document.querySelector('#listSUBMIT');
var mainCardEL = document.querySelector('.mainCard');
var tvscreenEL = document.querySelector('#tvscreen');


var songList1EL = document.querySelector('#songList1');
var songList2EL = document.querySelector('#songList2');
var songList3EL = document.querySelector('#songList3');


const colors = ['blue', 'green', 'orange']

const songTITLES = 
    [
        {
            title: "Goodbye1",
            artist: "Madonna1"
        },
        {
            title: "Goodbye2",
            artist: "Madonna2"
        },
        {
            title: "Goodbye3",
            artist: "Madonna3"
        },
        {
            title: "Goodbye4",
            artist: "Madonna4"
        },
        {
            title: "Goodbye5",
            artist: "Madonna5"
        },
        {
            title: "Goodbye6",
            artist: 'Madonna6'
        }
    ];

const usedSongTITLES = [];

const songTITLES1 = 
    [
        {
            title: "song1",
            artist: 'artist1'
        }
    ];

const songTITLES2 = 
    [
        {
            title: 'song2',
            artist: 'artist2'
        },
        {
            title: 'song2b',
            artist: 'artist2b'
        },
    ];

const songTITLES3 = 
    [
        {
            title: 'song3',
            artist: 'artist3'
        }
    ]; 

const usedSongLISTs = ['songTITLES3', 'songTITLES1', 'songTITLES2'];

spin = () => {

    setTimeout(selector, 100);

};

    var spinCOUNT = 0;
    var spinMAX = 10;

selector = () => {   
    
    var songPICK = Math.floor(Math.random() * 6);   
    randomNUMEL.innerHTML = songPICK;   
    
    titleEL.innerHTML = songTITLES[songPICK].title;
    artistEL.innerHTML = songTITLES[songPICK].artist

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
        console.log('fail-1')
    }
   if (songList2EL.checked === true) {
    for (let i = 0; i < songTITLES2.length; i++) {
        usedSongTITLES.push(songTITLES2[i]);
    } 
    } else {
        console.log('fail-2')
    }
    if (songList3EL.checked === true) {
        for (let i = 0; i < songTITLES3.length; i++) {
            usedSongTITLES.push(songTITLES3[i]);
        } 
    }else {
        console.log('fail-3')
    }
    console.log(usedSongTITLES);

}


// goEL.addEventListener("click", function () {
//     spin();
//     listMAKER();

// });

listSUBMITEL.addEventListener("click", function () {
    usedSongTITLES.length = 0;
    listMAKER();

});


document.addEventListener('keydown', function () {
    function keyCode(event) {
        var x = event.keyCode;
        if (x == 32) {
            spin();
        } else if (x == 9) {
            checkFORMEL.classList.toggle("show");

        } 
              
    }

    keyCode(event);
});