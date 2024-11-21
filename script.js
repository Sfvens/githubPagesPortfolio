let prevScrollpos = window.scrollY;
window.onscroll = function() {
  // logic for header disappear and reappear
  let currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    } else { // make sure this value is set the the height of your intro
    document.getElementById("header").style.top = "-50px"; /* adjust this value to the height of your header */
  }
  prevScrollpos = currentScrollPos;
}

function sendContactRequest() {
  const form = document.getElementById('contact-form');
  let name = form[0].value;
  let email = form[1].value;
  let message = form[2].value;

  console.log(name, email, message);
}