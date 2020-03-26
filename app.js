
//Cards open-close

let expand = document.getElementById('expandButton')
let cards = document.querySelectorAll('#cardd')
let closeButton = document.getElementById('expandButtonClose')
let tramitTab = document.getElementsByClassName('card-content')

expand.addEventListener('click', cardsExpand)
closeButton.addEventListener('click', cardsShow)

function cardsExpand() {
    for ( let i = 0; i < cards.length; i++) {
        cards[i].style.cssText = "display: none"
        tramitTab[i].style.cssText = "display: flex"
    }   
}

function cardsShow() {
    for ( let i = 0; i < cards.length; i++) {
        cards[i].style.cssText = "display: flex"
        tramitTab[i].style.cssText = "display: none"
    }
}

//Day-Night mode

if (localStorage.getItem('theme')) {
    var theme = localStorage.getItem('theme');
    document.body.classList.remove('dark','light');
    document.body.classList.add(theme);
  }
  
  var switchTheme = document.querySelector('.dark-btn');
  var toggleLight = document.querySelector('.light-btn');
  var toggleDark = document.querySelector('.dark-btn');
  
  switchTheme.addEventListener('click', function(e) {
    e.preventDefault();
  });
  toggleLight.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    toggleLight.style="display: none";
    toggleDark.style="display: block";
    localStorage.setItem('theme', 'light');
  });
  toggleDark.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.add('dark');
    toggleDark.style="display: none";
    toggleLight.style="display: block";
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  });
  