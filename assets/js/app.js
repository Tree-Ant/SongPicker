var titleEL = document.querySelector('.TITLE');
var artistEL = document.querySelector('.ARTIST');
var randomNUMEL = document.querySelector('.randomNUM');
var goEL = document.querySelector('.GO');
var wholeEL = document.querySelector('.whole');


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

    wholeEL.style.backgroundColor = colors[colorPICK];

        if (spinCOUNT <= spinMAX) {
            spinCOUNT++;
            spin();
        } else {
            spinCOUNT = 0;
            console.log("DONE");
        }
}; 

goEL.addEventListener("click", function () {
    spin();
});

