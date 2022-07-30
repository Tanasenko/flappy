const BIRD = document.getElementById('bird');
const BACKGROUND = document.getElementById('main');

//console.log(BIRD);
//console.log(BACKGROUND);

//Функция получения координат птички
// const getCoords = function (elem) {
//   elem = BIRD;
//   let box = elem.getBoundingClientRect();

//   //console.log(box)

//   return {
//     top: box.top /*+ scrollY*/,
//     bootom: box.bottom /*+ scrollY*/,
//     lef: box.left /*+ scrollX*/,
//     right: box.right /*+ screenX*/
//   }
// }
// let timerId;
// //Функция падения птички
// function goBottom() {
//   let positionNow = getCoords()

//   timerId = setTimeout(function () {
//     x += 10
//     BIRD.style.top = positionNow.top + x +'px';
//     //console.log(BIRD.style.top);
//     if (x < 290) {
//       goBottom();
//     }
//     /*if (BIRD.style.top > '600px'){
//       console.log('yay');
//       BIRD.style.top = '300px';
//       clearTimeout(timerId);
//     }*/
//   }, 300)
// }

// let x = 0;
// goBottom();

// //Реализация полета
// const flyBird = function () {
//   clearTimeout(timerId);
//   let positionNow = getCoords();
//   BIRD.style.top = positionNow.top - 100 + 'px';
//   goBottom();
// }

// BACKGROUND.onclick = flyBird;


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
  clearTimeout(timerId);
  let positionNow = getCoords();
  BIRD.style.top = positionNow.top - 100 + 'px';
  goBottom();
}

BACKGROUND.onclick = flyBird;