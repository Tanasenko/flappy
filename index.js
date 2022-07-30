const BIRD = document.getElementById('bird');
const BACKGROUND = document.getElementById('main');
const PIPETOP = document.getElementById('pipe_top');
const PIPEBOTTOM = document.getElementById('pipe_bottom');
const PIPE = document.getElementById('pipe');

//Движение труб
function pipeToGo(elem) {
  indexX -= 10;
  setTimeout( function () {
    elem.style.transform = `translate(${indexX}px)`;
    if(indexX > -860) {
      setTimeout(function() {
        elem.style.transition = '.3s';
      }, 90)
      pipeToGo(elem);
    } else {
      elem.style.transition = '0s';
      indexX = 0;
      elem.remove();
    }}, 100)
}

//Random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePipeToGo(pipeItem, pipes) {
  pipeItem.style.height = `${getRandomInt(1000)}%`;
  pipeToGo(pipes);
}

let indexX = 0;
generatePipeToGo(PIPETOP, PIPE);
