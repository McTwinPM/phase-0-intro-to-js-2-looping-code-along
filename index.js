// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
const event = ["surprise"]

function writeCards(names, event) {
  const thankYouMessages = []
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)

  }
  return thankYouMessages;
}
writeCards(names, "surprise")

function countDown(i) {
  let countDown = i;
  while (i >= 0) {
    console.log(i--)
  }
}
countDown(10)
