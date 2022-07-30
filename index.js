const BIRD = document.getElementById('bird');
const BACKGROUND = document.getElementById('main');
const PIPETOP = document.getElementById('pipe_top');
const PIPEBOTTOM = document.getElementById('pipe_bottom');
const PIPE = document.getElementById('pipe');


//Функция падения птички
function goBottom() {
  setTimeout(function () {
    x += 10;
    BIRD.style.transform = `translateY(${x}px)`;
    if(BIRD.style.transform != 'translateY(290px)'){
      goBottom();
      console.log('heu');
    }
  }, 250)
}

let x = 0;
goBottom();

//Реализация полета
const flyBird = function () {
  x -= 50;
  BIRD.style.transform = `translateY(${x}px)`;
  
}

BACKGROUND.onclick = flyBird;

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
