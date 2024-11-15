var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-80px"; /* adjust this value to the height of your header */
  }
  prevScrollpos = currentScrollPos;
}
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
console.log(loc)
console.log(dir)