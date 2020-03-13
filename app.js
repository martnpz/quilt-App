
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