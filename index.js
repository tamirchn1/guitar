// const strings = document.querySelectorAll('.str');
// const frets = document.querySelectorAll('.fret');
//
//
//
//
// strings.forEach((string) => {
//   string.addEventListener('mouseenter', () => {
//     if ($('#myguitar').html() == "CLASSIC") {
//       console.log(`${string.id}.mp3`)
//       let sound = new Audio(`
// ./sounds/${string.id}.mp3`)
//       sound.play();
//     } else if($('#myguitar').html('ELECTRIC')) {
//       console.log(`e${string.id}.mp3`)
//       let sound = new Audio(`
// ./sounds/e${string.id}.mp3`)
//       sound.play();
//     }
//     else {
//       console.log(`c${string.id}.mp3`)
//       let sound = new Audio(`
//     ./sounds/c${string.id}.mp3`)
//       sound.play();
//     }
//   })
// });
//
//
// $('#switch').on('click', function() {
//   $('#myguitar').html() == "CLASSIC" ?
//     $('#myguitar').html('ELECTRIC') :
//     $('#myguitar').html('CLASSIC');
// })


const strings = document.querySelectorAll('.str');
let selection = document.querySelector('#modes');

strings.forEach((string) => {
  string.addEventListener('mouseenter', () => {
    checkMode(string);
  })
});

function checkMode(string) {
  if (selection.value == 'classic') {
    console.log(`${string.id}.mp3`)
    let sound = new Audio(`
  ./sounds/${string.id}.mp3`)
    sound.play();
  } else if (selection.value == 'electric') {
    console.log(`e${string.id}.mp3`)
    let sound = new Audio(`
  ./sounds/e${string.id}.mp3`)
    sound.play();
  } else if (selection.value == 'chorus') {
    console.log(`c${string.id}.mp3`)
    let sound = new Audio(`
  ./sounds/c${string.id}.mp3`)
    sound.play();
  }
}
