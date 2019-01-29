
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
import images from "./images/*.jpg";

let i = 2;
let nbrImg = countKeys(images);
console.log(nbrImg);

document.getElementById("AlpagaImg").src = images["alpaga1"];

setInterval(() => {
  document.getElementById("AlpagaImg").src = images["alpaga"+i];
  i++;
  if(i == nbrImg)
    i=1;
}, 5000);

//create a array with all the keys from the object, then get the length of this arr.
function countKeys(obj) {
  return Object.keys(obj).length;
}