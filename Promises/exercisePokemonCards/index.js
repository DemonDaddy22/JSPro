(function () {
  class Pokemon {
    static #pokemons;

    static {
      const loadAllPokemons = async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3000');
          const data = await response.json();
          this.#pokemons = data.results;
        } catch (err) {
          console.log(err);
        }
      };
      loadAllPokemons();
    }

    static getRandomPokemons = (count = 3) => {
      const randomPokemons = [];
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * this.#pokemons.length);
        randomPokemons.push(this.#pokemons[randomIndex]);
      }
      return randomPokemons;
    }

    static getPokemonData = async (name) => {
      return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }

    static getPokemons = async (count = 3) => {
      try {
        const pokemons = this.getRandomPokemons(count);
        const promises = pokemons.map(pokemon => this.getPokemonData(pokemon.name));
        const json = await Promise.all(promises);
        const data = await Promise.all(json.map(j => j.json()));
        return data;
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  }

  const POKEMON_TYPES = Object.freeze({
    electric: '#f6c913',
    grass: '#6ac23d',
    water: '#4578ec',
    fire: '#ed6d11',
    ground: '#dcb44c',
    bug: '#98a51c',
    normal: '#9d9c63',
    poison: '#913992',
    flying: '#8f6feb',
    ice: '#7fcece',
    rock: '#a59031',
    steel: '#a0a0bf',
    fairy: '#e87990',
    ghost: '#654e87',
    psychic: '#f7366f',
    fighting: '#ae2b24',
    dark: '#654e40',
    dragon: '#5e1cf6',
  });

  const createElementWithClass = (element, ...classNames) => {
    const el = document.createElement(element);
    classNames.forEach(className => el.classList.add(className));
    return el;
  };

  const generatePokemonCardBackground = (types, isReversed = false) => {
    const typesClone = JSON.parse(JSON.stringify(types));
    while (typesClone.length < 2) {
      typesClone.push(typesClone[0] || '#0B8B87');
    }
    const colors = typesClone.map(type => POKEMON_TYPES[type.type.name]);
    return `linear-gradient(${isReversed ? '180deg' : '0deg'}, ${colors.join(', ')})`;
  };

  const generateTypeChip = (type) => {
    const chip = createElementWithClass('div', 'pokemon-type');
    chip.textContent = type.type.name;
    chip.style.backgroundColor = POKEMON_TYPES[type.type.name];
    return chip;
  };

  const getStat = (stat) => {
    const { base_stat, stat: meta } = stat;
    const statContainer = createElementWithClass('div', 'stat-container');
    const statTitle = createElementWithClass('p', 'stat-title');
    const statValue = createElementWithClass('p', 'stat-value');

    statTitle.textContent = meta.name;
    statValue.textContent = base_stat;

    statContainer.appendChild(statTitle);
    statContainer.appendChild(statValue);

    return statContainer;
  };

  const generatePokemonCard = (pokemon) => {
    const cardContainer = createElementWithClass('div', 'card-container');
    const card = createElementWithClass('div', 'card');
    const imageContainer = createElementWithClass('div', 'image-container');
    const image = createElementWithClass('img', 'image');
    const content = createElementWithClass('div', 'content');
    const pokemonId = createElementWithClass('h3', 'pokemon-id');
    const pokemonName = createElementWithClass('h1', 'pokemon-name');
    const pokemonTypes = createElementWithClass('div', 'pokemon-types');
    const pokemonStats = createElementWithClass('div', 'pokemon-stats');
  
    const fragment = document.createDocumentFragment();
    const chipsFragment = document.createDocumentFragment();
    const contentFragment = document.createDocumentFragment();
    const statsFragment = document.createDocumentFragment();

    const background = generatePokemonCardBackground(pokemon.types);
    cardContainer.style.background = background;
    imageContainer.style.background = generatePokemonCardBackground(pokemon.types, true);
    image.src = (
      pokemon.sprites?.other?.dream_world?.front_default
      || pokemon.sprites?.other?.['official-artwork']?.front_default
      || pokemon.sprites?.other?.home?.front_default
      || pokemon.sprites.front_default
    );
    image.setAttribute('alt', pokemon.name);
    pokemonName.style.background = background;
    pokemonId.textContent = `#${pokemon.id}`;
    pokemonName.textContent = pokemon.name;
    const pokemonTypeChips = pokemon.types.map(generateTypeChip);
    pokemonTypeChips.forEach(chip => chipsFragment.appendChild(chip));
    const pokemonStatsList = pokemon.stats.map(getStat);
    pokemonStatsList.forEach(stat => statsFragment.appendChild(stat));

    pokemonTypes.appendChild(chipsFragment);
    pokemonStats.appendChild(statsFragment);
    imageContainer.appendChild(image);
    contentFragment.appendChild(pokemonId);
    contentFragment.appendChild(pokemonName);
    contentFragment.appendChild(pokemonTypes);
    contentFragment.appendChild(pokemonStats);
    content.appendChild(contentFragment);
    fragment.appendChild(imageContainer);
    fragment.appendChild(content);
    card.appendChild(fragment);
    cardContainer.appendChild(card);

    return cardContainer;
  };

  const generatePokemonCards = (pokemonsData) => {
    const cards = document.getElementById('cards');
    const pokemonCards = pokemonsData.map(generatePokemonCard);
    cards.replaceChildren(...pokemonCards);
  };

  const handleButtonClick = async () => {
    try {
      const randomPokemonsData = await Pokemon.getPokemons();
      generatePokemonCards(randomPokemonsData);
    } catch (err) {
      console.log(err);
    }
  };

  const cardsBtn = document.getElementById('cards-btn');
  cardsBtn.addEventListener('click', () => handleButtonClick());
})();