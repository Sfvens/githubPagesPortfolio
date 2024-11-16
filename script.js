let prevScrollpos = window.scrollY;
window.onscroll = function() {
  // logic for header disappear and reappear
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    } else if(currentScrollPos > 400) { // make sure this value is set the the height of your intro
    document.getElementById("header").style.top = "-50px"; /* adjust this value to the height of your header */
  }
  prevScrollpos = currentScrollPos;

  //logic for parallax effect
  // if start or final position > size of window, do nothing
  // else override regular scroll behavior and change the size of the
  // window by final-start (negative if going down, positive if going up)
}

