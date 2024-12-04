
let cards = []
let blackJack = false
let isAlive = true
let message = ""
let sum = 0

let player = {
    name : "Salman",
    chips : 145
}


let messageEL = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $"+player.chips
 

function getRandomCard(){
    let number = Math.floor(Math.random()*13) + 1
    
    if( number === 1 ){
        return number = 11
    } else if( number > 10 ){
        return number = 10
    } else {
        return number
    }  
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if(sum < 21){
        message = "Do you want to draw a new card ? "
    } else if(sum === 21){
        message = "Wohoo!!, You have got BlackJack..."
        blackJack = true
    } else {
        message ="You are out of the game... "
        isAlive = false
    }
    messageEL.textContent = message
    sumEL.textContent = "Sum: "+sum

    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent += cards[i] + ", "
    }
}

function newCard(){
    if( isAlive === true && blackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}
