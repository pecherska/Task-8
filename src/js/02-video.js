import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.dir(iframe);
const player = new Player(iframe);
console.log(player);

const currentTime = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
   
};


player.on('timeupdate',  throttle(currentTime, 1000));




const savedTime = localStorage.getItem("videoplayer-current-time");
const parsedSavedTime = JSON.parse(savedTime);
console.log(parsedSavedTime);

player.setCurrentTime(parsedSavedTime);


// const throttled = _throttle(currentTime, 1000);
// console.dir(throttled);