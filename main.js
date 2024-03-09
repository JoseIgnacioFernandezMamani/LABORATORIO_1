import './style.css'
import fetchPokemon from './src/services/api.js';

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const pokemonDisplay = document.getElementById('pokemon-display');

searchButton.addEventListener('click', async () => {
    const query = searchInput.value.trim();
    if (!query) return; 
    console.log('test');
    try {
        const pokemon = await fetchPokemon('https://pokeapi.co/api/v2/pokemon/', query);
        console.log(pokemon);
        displayPokemon(pokemon);
        displayPokemonSprites(pokemon, 'front_default'); 
        pokemonIndices(pokemon);
        pokemonMoves(pokemon);
    } catch (error) {
        console.error("Error al buscar el Pokémon:", error);
    }
});

const  displayPokemon = (pokemon) => {
    pokemonDisplay.innerHTML = '';
    const pokemonName = document.createElement('h2');
    pokemonName.textContent = pokemon.name;
    pokemonDisplay.appendChild(pokemonName);
};

const displayPokemonSprites = (pokemon, spriteType) => {
  const spritesContainer = document.getElementById('sprites-container');
  spritesContainer.innerHTML = ''; 

  if (pokemon.sprites) {
    const spriteImg = document.createElement('img');
    spriteImg.src = pokemon.sprites[spriteType];
    spriteImg.alt = spriteType; 
    spritesContainer.appendChild(spriteImg);
  } else {
    console.error('No se encontró el sprite "${spriteType}" para este Pokémon.');
  }
};







