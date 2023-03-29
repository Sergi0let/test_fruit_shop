// Burger menu
function menuInit() {
  if (document.querySelector('.icon-menu')) {
    document.addEventListener('click', function (e) {
      if (e.target.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
        document.querySelector('.menu').classList.toggle('active-menu');
      } else {
        document.documentElement.classList.remove('menu-open');
        document.querySelector('.menu').classList.remove('active-menu');
      }
    });
  }
}

menuInit();
