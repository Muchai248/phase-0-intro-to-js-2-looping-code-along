// Code your solutions in this file
function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  countDown(10);


  function writeCards(names, event) {
    let thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(
        `Thank you, ${names[i]}, for the wonderful ${event} gift!`
      );
    }
    return thankYouCards;
  }
  writeCards(["Jane", "John", "Mary"], "gift");