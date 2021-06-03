const player1 = {
  name: 'Kinana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['kunai'],
  attack: function () {
    console.log('Kinana' + ' Fight...');
  },
}

const player2 = {
  name: 'Scorpio',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['machete'],
  attack: function () {
    console.log('Scorpio' + ' Fight...');
  },
}

function createPlayer (player, character) {
  const $progressbar = document.createElement('div');
  const $player1 = document.createElement('div');
  const $character = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $img = document.createElement('img');
  const $arenas = document.querySelector('.arenas');

  $player1.classList.add(player);
  $life.classList.add('life');
  $name.classList.add('name');
  $progressbar.classList.add('progressbar');
  $character.classList.add('character');

  $img.src = character.img;
  $name.innerText = character.name;
  $life.style.width = character.hp + '%';

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $arenas.appendChild($player1);
}

createPlayer('player1', player1);
createPlayer('player2', player2);

// function createPlayer(name, player) {
//   const $player = document.createElement('div'); //
//   $player.classList.add('name'); //
//
//   const $progressbar = document.createElement('div'); //
//   $progressbar.classList.add('progressbar'); //
//
//   const $life = document.createElement('div'); //
//   $life.classList.add('life'); //
//   $life.style.width = player.hp + '%';
//   const $name = document.createElement('div'); //
//   $name.classList.add('name'); //
//   $name.innerHTML = player.name;
//
//   const $character = document.createElement('div'); //
//   $character.classList.add('character');//
//
//   const $img = document.createElement('img'); //
//   $img.src = player.img;
//
//   $character.appendChild($img);
//   $progressbar.appendChild($life);
  // $progressbar.appendChild($name);
//   $player.appendChild($progressbar);
//   $player.appendChild($character);
//
//   const $arenas = document.querySelector('.arenas'); //
//   $arenas.appendChild($player);
//
// }
// createPlayer('player1', player1);
// createPlayer('player2', player2);
