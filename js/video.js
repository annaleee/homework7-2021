var media=document.getElementById('player1');
var play=document.getElementById('play');
var pause=document.getElementById('pause');
var slowDown=document.getElementById('slower');
var speedUp=document.getElementById('faster');
var skipAhead=document.getElementById('skip');
var mute=document.getElementById('mute');
var slider=document.getElementById('slider');
var vintage=document.getElementById('vintage');
var original=document.getElementById('orig');

vol = document.querySelector("#volume").innerHTML = media.volume*100 + "%";

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
media.loop=true;
play.addEventListener('click',function() {
	media.volume=1;
	media.play();
	console.log("Play Video");
});
pause.addEventListener('click',function(){
	media.pause();
	console.log("Pause Video");
})
slowDown.addEventListener('click',function(){
	media.playbackRate*=0.95;
	console.log("New speed is "+media.playbackRate);
});
speedUp.addEventListener('click',function(){
	media.playbackRate/=0.95;
	console.log("New speed is "+media.playbackRate);
});
skipAhead.addEventListener('click',forward);
mute.addEventListener('click',muteOrNot)
slider.onchange=function(){
	console.log(this.value/100);
	let vol = document.querySelector("#volume").innerHTML = this.value + "%";
	media.volume = (this.value/100);
};
vintage.addEventListener('click',function(){
	media.classList.add("oldSchool");
});
original.addEventListener('click',function(){
	media.classList.remove("oldSchool");
});

function forward(){
	console.log("Original location "+media.currentTime);
	if(video.currentTime < video.duration - 15){
		video.currentTime += 15;
	}
	else{
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	console.log("New location" + video.currentTime);
};
function muteOrNot(){
	if(media.volume!=0){
		media.volume=0;
		mute.innerHTML="Unmute";
		slider.value=0;
		vol = document.querySelector("#volume").innerHTML = media.volume*100 + "%";
	}else{
		media.volume=1;
		mute.innerHTML="mute";
		slider.value=100;
		vol = document.querySelector("#volume").innerHTML = media.volume*100 + "%";
	}
};


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

