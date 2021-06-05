const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
const player1 = {
  name: 'Kinana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['kunai'],
  attack: function () {
    console.log(name + ' Fight...');
  },
  player: 1,
};

const player2 = {
  name: 'Scorpio',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['machete'],
  attack: function () {
    console.log(name + ' Fight...');
  },
  player: 2,
};

function createElement(tag, className){
  const $tag = document.createElement(tag);
  if (className){
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(character) {
  const $player = createElement('div', 'player' + character.player);
  const $progressbar = createElement('div', 'progressbar');
  const $life = createElement('div', 'life');
  $life.style.width = character.hp + '%';
  const $name = createElement('div', 'name');
  $name.innerHTML = character.name;
  const $character = createElement('div', 'character');
  const $img = createElement('img');
  $img.src = character.img;

  $character.appendChild($img);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  return $player;

}

function randomLife (min, max){
  let randomNumber = min + Math.random() * (max + 1 - min);
  return Math.ceil(randomNumber);
}

function changeHP(players) {
  for (var i = 0; i < players.length; i++) {
    const $playerLife = document.querySelector('.player'+ players[i].player +' .life');
    const numberRand = randomLife(1, 20);
    players[i].hp -= numberRand;
    $playerLife.style.width = players[i].hp + '%';
    if (players[i].hp <= 0) {
      $playerLife.style.width = 0;
      $randomButton.disabled = true;
    }
  }
  if (players[0].hp <= 0 && players[1].hp > 0) {
    $arenas.appendChild(playerWin(players[1].name));
  } else if (players[1].hp <= 0 && players[0].hp > 0){
    $arenas.appendChild(playerWin(players[0].name));
  }
}

function playerWin(name) {
  const $winTitle = createElement('div', 'winTitle');
  $winTitle.innerText = name + ' wins';
  return $winTitle;
}

$randomButton.addEventListener('click', function() {
  let players = [player1, player2];
  changeHP(players);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

// function changeHP(player) {
//   const $playerLife = document.querySelector('.player'+ player.player +' .life');
//   // player.hp -= 10;
//   const numberRand = randomLife(1, 20);
//   player.hp -= numberRand;
//   $playerLife.style.width = player.hp + '%';//
//   if (player.hp <= 0) {
//     $arenas.appendChild(playerLose(player.name));
//     $randomButton.disabled = true;
//     $playerLife.style.width = 0;
//   }
// }

// $randomButton.addEventListener('click', function() {
//   changeHP(player1);
//   changeHP(player2);
// });

// function playerLose(name) {
//   const $loseTitle = createElement('div', 'loseTitle');
//   $loseTitle.innerText = name + ' lose';
//   return $loseTitle;
// }

//
