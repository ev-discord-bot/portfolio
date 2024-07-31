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
  const portfolioText = document.getElementById('portfolio-text'); // Reference to portfolio-text element
  body.setAttribute('data-theme', 'dark');

  themeToggleBtn.addEventListener('click', function () {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
      body.setAttribute('data-theme', 'light');
      backgroundImage.src = 'images/light_background.png';
      portfolioText.classList.remove('from-primary', 'to-info');
      portfolioText.classList.add('from-[#0a4b58]', 'to-[#062f37]');
    } else {
      body.setAttribute('data-theme', 'dark');
      backgroundImage.src = 'images/main_background.png';
      portfolioText.classList.remove('from-[#0a4b58]', 'to-[#062f37]');
      portfolioText.classList.add('from-primary', 'to-info');
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
});