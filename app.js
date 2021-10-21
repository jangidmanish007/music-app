console.log("wellcome to my Music App");
// initialie the variables
let songIndex = 0;
let audioElement = new Audio('/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let MasterSongName = document.getElementById('MasterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Joker - Hardy Sandhu", filePath: "songs/1.mp3", coverPath: "covers/Joker.jpg" },
    { songName: "Maroon 5 - Memories", filePath: "songs/2.mp3", coverPath: "covers/memories.jpg" },
    { songName: "Peaky Blinders - Title", filePath: "songs/3.mp3", coverPath: "covers/blinder.jpg" },
    { songName: "Ranjha - Shershaah", filePath: "songs/4.mp3", coverPath: "covers/ranjha.jpg" },
    { songName: "American Authors - Best Day", filePath: "songs/5.mp3", coverPath: "covers/amircan-authers.jpg" },
    { songName: "Tu Mileya - Darshan Raval", filePath: "songs/6.mp3", coverPath: "covers/tu-milya.jpg" },
    { songName: "Ek Tarfa - Darshan Raval", filePath: "songs/7.mp3", coverPath: "covers/ek-tarfa.jpg" },
    { songName: "RockStar - Nadaan Parindey", filePath: "songs/8.mp3", coverPath: "covers/nadan-parindey.jpg" },
    { songName: "Tum Mile - Tu Hi Haqeeqat", filePath: "songs/9.mp3", coverPath: "covers/emran.jpg" },
    { songName: "Kabir Singh - Mere Sohneya", filePath: "songs/10.mp3", coverPath: "covers/meri-soninya.jpg" },
    { songName: "Uchiyaan Dewaraan ", filePath: "songs/11.mp3", coverPath: "covers/uchiya-deewara.jpg" },
    { songName: "Tajdar-e-Haram", filePath: "songs/12.mp3", coverPath: "covers/taj-der-e-herm.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

// audioElement.play();

// handle play/pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        console.log(audioElement);
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity = 0;
    }
})

// listen to Events
audioElement.addEventListener('timeupdate', () => {
    //   update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;


    myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100.
    })

    // for click on a songs and play songslist 
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
       element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        MasterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// for click on next bttn and song will play
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >=11) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    MasterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
