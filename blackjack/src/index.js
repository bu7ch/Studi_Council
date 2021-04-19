import { wait } from './utils'
import { cardtemplate } from './templates'
import { dealerEl, playerEl, buttonsEl, updateLabel, status, render, addcard } from  './elements'
import { createDeck, pop, countHand, dealInitialHand, flipCardDown, flipCardUp } from './cards'

const deck = createDeck()
const dealerHand = new Set()
dealInitialHand(dealerHand,deck)
flipCardDown([...dealerHand][0])

const playerHand = new Set()
dealInitialHand(playerHand,deck)
render(dealerEl, dealerHand)
render(playerEl,playerHand)

function* dealerPlay() {
  dealerEl.querySelector('.card').classList.add("flipped");
  while(countHand(dealerHand) < countHand(playerHand)) {
    addcard(dealerEl, dealerHand, pop(deck));
    yield
  }
  if (countHand(dealerHand) === countHand(playerHand)) {
    if (countHand(dealerHand) < 17) {
      addcard(dealerEl, dealerHand, pop(deck));
      yield
    } 
  }
}
function dealerTurn(callback) {
  wait(dealerPlay(), 1000, callback)
}

function hit(){
  addcard(dealerEl, dealerHand, pop(deck));
  updateLabel(playerEl, playerHand);
  const score = countHand(playerHand);
  if (score > 21) {
    buttonsEl.classList.add("hidden");
    status('PERDU...#LOOSER!')
  } else if (score === 21) {
    stay()
  }
}

function stay(){
  buttonsEl.classList.add("hidden");
  dealerEl.querySelector('.score').classList.remove("hidden");
  dealerTurn(() => {
    updateLabel(dealerEl, dealerHand);
    const dealerScore = countHand(dealerHand);
    const playerScore = countHand(playerHand);
    if(dealerScore > 21 || dealerScore < playerScore){
      status('VOUS AVEZ GAGNEE!!!');
    } else if ( dealerScore === playerScore) {
      status("PUSH.")
    } else {
      status('LA BANQUE GAGNE !!')
    }
  });
}

document.querySelector('.hit-me'.addEventListener('click', hit))
document.querySelector('.stay'.addEventListener('click', stay))