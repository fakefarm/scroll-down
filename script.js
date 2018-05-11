var box = document.querySelector('.box');
var box2 = document.querySelector('.box2');
var font = document.querySelector('.h1');
var body = document.querySelector('html');

window.addEventListener('scroll', function(e) {
  box.style.left = window.scrollY + 'px';
  box2.style.left = window.scrollY + 'px';
  box2.style.top = window.scrollY + 'px';
  box2.style.transform = 'rotate(' + window.scrollY + 'deg)';

  if (window.scrollY == 0) {
    font.style.fontSize = '1em';
  } else {
    font.style.fontSize = window.scrollY + 'px';
  }
  var expr = window.scrollY;
  if (expr < '150') {
    body.style.background = 'white';
    font.style.fontFamily = 'helvetica';
  } else if (expr > '150' && expr < '400') {
    body.style.background = 'red';
    font.style.fontFamily = 'courier';
  } else if (expr > '400' && expr < '800') {
    body.style.background = 'blue';
    font.style.fontFamily = 'lucida grande';
    font.style.top = 0;
  } else if (expr > '800' && expr < '1200') {
    body.style.background = 'green';
    font.style.fontFamily = 'cursive';
  } else {
    body.style.background = 'seagreen';
    font.style.fontFamily = 'helvetica';
  }
});
