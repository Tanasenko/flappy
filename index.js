const BIRD = document.getElementById('bird');
const BACKGROUND = document.getElementById('main');
const PIPETOP = document.getElementById('pipe_top');
const PIPEBOTTOM = document.getElementById('pipe_bottom');
const PIPE = document.getElementById('pipe');

//console.log(BIRD);
//console.log(BACKGROUND);

//Функция получения координат птички
const getCoords = function (elem) {
  elem = BIRD;
  let box = elem.getBoundingClientRect();

  // console.log(box);

  return {
    top: box.top /*+ scrollY*/,
    bootom: box.bottom /*+ scrollY*/,
    lef: box.left /*+ scrollX*/,
    right: box.right /*+ screenX*/
  }
}

let timerId;
//Функция падения птички
function goBottom() {
  let positionNow = getCoords()

  timerId = setTimeout(function () {
    x += 10
    BIRD.style.top = positionNow.top + x +'px';
    // console.log('setTimout' ,positionNow.top);
    if (x < 290) {
      goBottom();
    }
    if (BIRD.style.top > '600px'){
      // console.log('yay');
      BIRD.style.top = '300px';
      clearTimeout(timerId);
    }
  }, 300)
}

let x = 0;
goBottom();

//Реализация полета
const flyBird = function () {
  clearTimeout(timerId);
  let positionNow = getCoords();
  BIRD.style.top = positionNow.top - 100 + 'px';
  goBottom();
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
      pipeToGo(elem);
    }}, 100)
}

let indexX = 0;
pipeToGo(PIPE);
// pipeToGo(PIPETOP);

