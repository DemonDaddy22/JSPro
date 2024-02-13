(function(){
  const button = document.getElementById('dice-btn');
  const message = document.getElementById('message');

  const WINNING_NUM = 6;

  const didPlayerWin = (roll) => roll === WINNING_NUM;

  const getMessage = (roll) => (
    `You rolled a ${roll}! ${didPlayerWin(roll) ? 'You win!' : 'Try again!'}`
  );

  const updateMessage = (roll) => {
    const newMessage = getMessage(roll);
    message.textContent = newMessage;
  };

  const getRandomRoll = () => Math.floor(Math.random() * WINNING_NUM) + 1;

  const handleButtonClick = () => {
    const roll = getRandomRoll();
    updateMessage(roll);
  };

  button.addEventListener('click', handleButtonClick);
})()