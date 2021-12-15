var quotes = [
  'You are loved.',
  'You are wanted.',
  'You are enough.',
  'You are strong.',
  'You are smart.',
  'You belong here.',
  'You make others smile.',
  'You are confident.',
  'You are worthy of amazing things.',
  'You are worthy of love.',
  'You are wonderful.',
  'You are respected.',
  'You deserve to live to your fullest potential.',
  'You are beautiful.',
  'You are light in the dark.',
  'You have a beautiful smile.',
  'Your eyes glisten when you smile.',
  'You are kind.',
  'You are powerful.',
  'You are fearless.',
  'You are radiant.',
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

