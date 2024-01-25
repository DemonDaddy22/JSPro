/*

In this part, you’ll use the Deck of Cards API, which has two endpoints
you’ll need:

https://deckofcardsapi.com/api/deck/new/shuffle
- This returns a “deck_id” — an ID to a unique, shuffled deck of cards.

https://deckofcardsapi.com/api/deck/[deck-id]/draw
- Which draws a card from the given deck ID, and returns info about the card
drawn.

Build an HTML page that gets a new deck on page load. It should have a button
that, when clicked, draws a card from that deck and shows it. Every time you
click the button, display another new card, until there are no cards left in
the deck (when the deck is exhausted, hide the button).

*/

(async function () {
  const cards = document.querySelector('.cards');
  const button = document.querySelector('button');

  const TOTAL_CARDS = 52;
  let cardsCount = 0;

  const DECK_OF_CARDS_API_BASE_URI = 'https://deckofcardsapi.com/api/deck';
  const DECK_OF_CARDS_SHUFFLE_API = 'https://deckofcardsapi.com/api/deck/new/shuffle';

  const getShuffledDeck = async () => {
    const response = await fetch(DECK_OF_CARDS_SHUFFLE_API);
    const json = await response.json();
    return json.deck_id;
  };

  const getRandomCard = async (deckId) => {
    const response = await fetch(`${DECK_OF_CARDS_API_BASE_URI}/${deckId}/draw`);
    const json = await response.json();
    return json.cards[0];
  };

  const getRandomNumber = (max) => {
    const mustBeNegative = Math.random() < 0.5;
    const baseValue = max * Math.random();
    return mustBeNegative ? 0 - baseValue : baseValue;
  };

  const getPlacementParameters = () => {
    const x = getRandomNumber(12);
    const y = getRandomNumber(12);
    const angle = getRandomNumber(20);
    const origin = getRandomNumber(1) < 0 ? 'bottom' : 'top';

    return {
      x, y, angle, origin,
    };
  };

  const placeCard = (card) => {
    const { code, image, suit, value } = card;

    const img = document.createElement('img');
    img.src = image;
    img.alt = `${value} of ${suit}`;
    img.setAttribute('id', code);
    img.classList.add('card');

    const { x, y, angle, origin } = getPlacementParameters();
    img.style.zIndex = cardsCount;
    img.style.left = x;
    img.style.top = y;
    img.style.transform = `rotate(${angle}deg)`;
    img.style.transformOrigin = `${origin}`;

    cards.appendChild(img);
  };

  const handleButtonClick = async (deckId) => {
    const card = await getRandomCard(deckId);
    cardsCount++;
    if (cardsCount > TOTAL_CARDS) {
      button.style.display = 'none';
    }
    placeCard(card);
  };

  const DECK_ID = await getShuffledDeck();

  button.addEventListener('click', () => handleButtonClick(DECK_ID));
})();