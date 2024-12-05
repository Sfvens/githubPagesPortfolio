let prevScrollpos = window.scrollY;
window.onscroll = function() {
  // logic for header disappear and reappear
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("options").style.top = "2.28em"; //perhaps rid thyself of this magic number someday
    } else { // make sure this value is set the the height of your intro
    document.getElementById("header").style.top = "-50px"; /* adjust this value to the height of your header */
    document.getElementById("options").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
