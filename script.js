var arr = [{ songName: "Phir se ud chala", albumName: "Rockstar", duration: "4:31", img: "./IMG/rockstar cd.jpg", url: "./songs/128-Phir Se Ud Chala - Rockstar 128 Kbps.mp3" },
{ songName: "Satranga", albumName: "Animal", duration: "4:31", img: "./IMG/download.jpg", url: "./songs/Satranga(PagalWorld.com.cm).mp3" },
{ songName: "Tum se hi", albumName: "Jab we met", duration: "5:23", img: "./IMG/Jab_We_Met_Poster.jpg", url: "./songs/128-Tum Se Hi - Jab We Met 128 Kbps.mp3" },
{ songName: "Ram siya ram", albumName: "Adipurush", duration: "4:28", img: "./IMG/2022_10$largeimg_1323794357.jpg", url: "./songs/_Ram Siya Ram(PagalWorld.com.cm).mp3" },
{ songName: "Kesariya", albumName: "Bramhastra", duration: "3:50", img: "./IMG/71FlIOW3lCL._AC_UF1000,1000_QL80_.jpg", url: "./songs/Kesariya(PagalWorld.com.cm).mp3" }]

var songsDiv = document.querySelector(".songDivs");
var posterr = document.querySelector(".SongPlayer")
var bars = document.querySelector(".baars")
// var ExploreContainer = document.querySelector(".ExploreContainer")
var navi = document.querySelector(".navi")
var uparrow = document.querySelector(".uparrow")
var close = document.querySelector(".close")
var songList = document.querySelector(".songList")

var expand = 0
// var expand2 = 0
// var expand3 = 1
var isExpanded = false;

bars.addEventListener("click", function(){
    if(expand === 0){
        // ExploreContainer.style.height = "0%";
        navi.style.height = "0%";
        navi.style.opacity = 0;
        expand = 1;
    }
    else{
        // ExploreContainer.style.height = "100%";
        navi.style.height = "100%";
        navi.style.opacity = 1;
        expand = 0;
    }
})

uparrow.addEventListener("click", function(){
    if (!isExpanded) {
        songList.style.height = "95%";
        isExpanded = true;
        close.style.opacity = 1;
    }
})

close.addEventListener("click", function(){
    if (isExpanded) {
        songList.style.height = "0%";
        isExpanded = false;
        close.style.opacity = 0;
    }
})

function updateCloseOpacity() {
    if (window.innerWidth > 735) {
        close.style.opacity = 0;
    } else if (isExpanded) {
        close.style.opacity = 1;
    }
}
updateCloseOpacity();

// Listen for window resize events
window.addEventListener("resize", updateCloseOpacity);

var audio = new Audio()

var selectedSong = 0

function playSong() {
    var clutter = ""

    var posterImage = ""
    arr.forEach(function (element, idx) {
        clutter += `<div class="listItem w-full h-[10vh] bg-gray-500 rounded-md flex items-center gap-2 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... cursor-pointer" id = ${idx}>
    <img class="h-[7vh] w-[7vh] rounded-md ml-[0.45vw] poster2" src="${element.img}" alt="">
    <div class="text4 w-[70%] h-[3vw] bg-transparent grid grid-cols-[60%_30%_10%] flex text-gray-300 text-xs items-center pointer-events-none">
        <div class="text3 bg-transparent">
            <h4 class="bg-transparent text-[2.1vh]">${element.songName}</h4>
            <span class="albumName bg-transparent text-[2vh]">${element.albumName}</span>
        </div>
        <span class="bg-transparent">${element.duration}</span>
        <i class="fa fa-play bg-transparent" aria-hidden="true"></i>
    </div>
</div>`

    })
    songsDiv.innerHTML = clutter

    audio.src = arr[selectedSong].url

    posterImage = `<div class="poster w-[8vw] h-[8vw] absolute bottom-4 left-12 rounded-md overflow-hidden">
        <img src="${arr[selectedSong].img}" alt="" class="rounded md w-[100%] h-[100%] object-cover object-top">
        </div>`

    posterr.innerHTML = posterImage
}
playSong();

songsDiv.addEventListener("click", function (deetail) {
    selectedSong = deetail.target.id
    Btn2.innerHTML = `<i class="fa-solid fa-pause bg-transparent text-2xl active:text-3xl"></i>`
    flag = 1
    playSong()
    audio.play()
})

var Btn1 = document.querySelector(".btn1")
var Btn2 = document.querySelector(".btn2")
var Btn3 = document.querySelector(".btn3")

var flag = 0
Btn2.addEventListener("click", function () {
    if (flag === 0) {
        Btn2.innerHTML = `<i class="fa-solid fa-pause bg-transparent text-2xl active:text-3xl"></i>`
        playSong()
        audio.play()
        flag = 1
    }
    else {
        Btn2.innerHTML = `<i class="playy fa-solid fa-play bg-transparent text-2xl active:text-3xl"</i>`
        playSong()
        audio.pause()
        flag = 0
    }
})

Btn3.addEventListener("click", function () { //forward
    if (selectedSong < arr.length - 1) {
        selectedSong++
        playSong()
        audio.play()
    }
    else {
        Btn3.style.opacity = 0.4
    }
})

Btn1.addEventListener("click", function () { //backward
    if (selectedSong > 0) {
        selectedSong--
        playSong()
        audio.play()
    }
    else {
        Btn1.style.opacity = 0.4
    }
})

Btn1.addEventListener("click", function () {
    Btn3.style.opacity = 1
    playSong()
    audio.play()
})
Btn3.addEventListener("click", function () {
    Btn1.style.opacity = 1
    playSong()
    audio.play()
})