import { cardTemplate } from "./templates";
import {countHand } from "./cards";


const app = document.querySelector('#blackjack');
const statusEl = app.querySelector('.status')

export const dealerEl = app.querySelector(".dealer")
export const playerEl = app.querySelector(".player")
export const buttonEl = app.querySelector(".buttons")


export function domNode(str) {
  const template = document.createElement('template');

  template.innerHTML = str;
  return template.content.firstChild
}

export function render(element, hand) {
  element.querySelector('.hand').innerHTML = [...hand].map(cardTemplate).join('');
  element.querySelector('.score').innerHTML = countHand(hand)
  uppdatelabel(element, hand)
} 

export function addcard(element, hand, card) {
  hand.add(card)
  const cardNode = domNode(cardTemplate(card))
  element.querySelector('.hand').classList.add("adding")
  element.querySelector('.hand').appendChild(cardNode);
  element.querySelector('.score').innerHTML = countHand(hand)
  setTimeout(() =>element.querySelector('.hand').classList.remove('adding'), 10)
}