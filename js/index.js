window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const backgroundImage = document.getElementById('background-image');
    body.setAttribute('data-theme', 'dark');
  
    themeToggleBtn.addEventListener('click', function () {
      const currentTheme = body.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
  });