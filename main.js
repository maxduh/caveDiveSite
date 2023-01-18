// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// console.log("test0");
// if(false){
// if (matchMedia('(pointer:fine)').matches) {
//   document.addEventListener("mousemove", parallax);
//         function parallax(event) {
//           this.querySelectorAll(".mouse").forEach((shift) => {
//             const position = shift.getAttribute("value");
//             const x = (window.innerWidth - event.pageX * position) / 90+window.innerWidth*0.1/2;
//             const y = (window.innerHeight - event.pageY * position) / 90+window.innerHeight*0.1/2;
    
//             shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
//           });
//         }
// }}

window.addEventListener('deviceorientation',function(e){
  const x = Math.round(e.beta);
  const y = Math.round(e.gamma);
  const z = Math.round(e.alpha);

  document.getElementsByClassName('nav-button')[0].innerText = "X-Axis = " + x;
  document.getElementsByClassName('nav-button')[1].innerText = "Y-Axis = " + y;
  document.getElementsByClassName('nav-button')[2].innerText = "Z-Axis = " + z;

  //Parallax Effect

  document.getElementsByClassName('rocket')[0].style.transform = `translateY(-${x}%)`;

});



// const bgs = [];
// bgs.push("media/LushCave.webp", "media/IceCave.webp","media/LavaCave.webp")
// document.getElementById("bg").style.backgroundImage = "linear-gradient(#00000000,#000000FF),url("+bgs[getRandomInt(bgs.length)]+")";

// const onKonami = (action, seq = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]) => {
//   const target = seq .join (',')
//   let current = []
//   window.addEventListener ('keydown', (e) => { 
//     current = current .concat (e.keyCode) .slice (-seq.length)
//     if (current .join (',') == target) {action (current)}
//   })
// }

// var audio = new Audio('media/music.mp3');

// onKonami (
//   () => {
//     console.log("test");
//     audio.play();
//   }
// )
