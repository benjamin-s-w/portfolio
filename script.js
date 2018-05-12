window.onload = function() {//function that delays loading the script till the HTML Document is fully loaded so that the script has DOM objects to bind to
  /* global variables */
  var nav = document.getElementById('nav');
  var menu = document.getElementById('menu');

  /* event listener for better future proofing, and no need to IE-proof it with onclick since it is for mobile only functionality */
  menu.addEventListener('click', toggleVisibility);//listens for the menu click in mobile

  /* drop-down menu functionality, which uses the above variables; again, no need to IE-proof it with attachEvent(), since it's mobile only */
  function toggleVisibility() {//opens and closes the mobile menu
    if(nav.classList == 'visually-hidden') {
      nav.style.height = '220px';
      nav.classList.remove('visually-hidden');
      nav.classList.add('revealed');
    } else {
      nav.style.height = '1px';
      setTimeout(function() {//sets a delay so the height can animate to 1px before the nav disappears completely
        nav.classList.remove('revealed');
        nav.classList.add('visually-hidden');
      }, 300);//the time of delay in ms which matches nav's CSS transition
    }//end if statement
  };
};
