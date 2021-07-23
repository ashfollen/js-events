const pokeContainer = document.getElementById("poke-container");
const pokeFormContainer = document.getElementById("poke-form-container");
const pokeForm = document.getElementById('poke-form');




function renderPoke(pokemon) {
  const pokeCard = document.createElement("div");
  pokeCard.id = `poke-${pokemon.id}`;
  pokeCard.className = "poke-card";
  
  const pokeImg = document.createElement("img");
  pokeImg.src = pokemon.img;
  pokeImg.alt = `${pokemon.name} image`;
  
  const pokeName = document.createElement("h3");
  pokeName.textContent = pokemon.name;
  
  const pokeLikes = document.createElement("h3");
  pokeLikes.textContent = 'Likes: ';
  
  const likesNum = document.createElement("h5");
  likesNum.id = "like-num"
  likesNum.textContent = pokemon.likes

  const bttn = document.createElement('button')
  bttn.id = "like-bttn"
  bttn.textContent = '<3'
  bttn.addEventListener('click', increaseLike)

  pokeCard.append(pokeImg, pokeName, pokeLikes, likesNum, bttn);
  pokeContainer.appendChild(pokeCard);
}

function increaseLike(event) {
  const likesElement = event.target.previousElementSibling
  likesElement.textContent = parseInt(likesElement.textContent) + 1
}

function createPoke(event){
  event.preventDefault();
  const pForm = event.target;

  const poke = {
    id: 7,
    name: pForm.querySelector('#name-input').value,
    img: pForm.querySelector('#img-input').value,
    likes: 0
  }

  renderPoke(poke)
  pokeForm.reset()

}

function init() {
  pokemons.forEach(renderPoke);
  pokeForm.addEventListener('submit', createPoke)
}

init();



