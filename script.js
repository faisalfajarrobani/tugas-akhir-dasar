window.addEventListener('scroll', fadeefek);
function fadeefek() {
  var reveals = document.querySelectorAll('.fadeefek');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 200;

    if (revealtop > windowheight - revealpoint) {
      reveals[i].classList.add('aktif');
    } else {
      reveals[i].classList.remove('aktif');
    }
  }
}
