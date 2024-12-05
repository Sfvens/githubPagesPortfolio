let prevScrollpos = window.scrollY;
window.onscroll = function() {
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("options").style.top = "2.28em";
    } else { 
    document.getElementById("header").style.top = "-50px"; /* adjust this value to the height of your header */
    document.getElementById("options").style.top = "-200px";
  }
  prevScrollpos = currentScrollPos;
}
