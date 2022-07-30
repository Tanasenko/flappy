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
      generatePipeElem()
    }}, 100);
}

//Random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generatePipeToGo(pipeItem, pipes) {
  pipeItem.style.height = `${getRandomInt(1000)}%`;
  pipeToGo(pipes);
}

function generatePipeElem() {
  let pipe = document.createElement('div');
  pipe.className = 'flex, new';
  // pipe.id = 'new'; 
  BACKGROUND.append(pipe);

  let pipeTop = document.createElement('span');
  pipeTop.className = 'pipe';
  pipeTop.id = 'pipe_top';
  pipe.append(pipeTop);

  let pipeBottom = document.createElement('span');
  pipeBottom.className = 'pipe';
  pipeBottom.id = 'pipe_bottom';
  pipe.append(pipeBottom);

  console.log('создал див');

  generatePipeToGo(pipeTop, pipe)
  //pipeToGo(pipe);
}

let indexX = 0;
//generatePipeToGo(PIPETOP, PIPE);
//setTimeout(generatePipeElem(), 1000);
// for (let i = 0; i < 3; i++) {
//   setTimeout(generatePipeElem(), 3000)
// }

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
generatePipeElem()
sleep(2000);
generatePipeElem()

