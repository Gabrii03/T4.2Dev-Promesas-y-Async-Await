function getPokemonInfoPromises() {
    const pokemonId = document.getElementById('pokemonId').value;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    
    //promise
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonNameDiv = document.getElementById('pokemonInfo');
            pokemonNameDiv.innerHTML = `
                <h2>${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <p>Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener la información del Pokémon', error);
        });

    
}

async function getPokemonInfoAsyncAwait() {
    const pokemonId2 = document.getElementById('pokemonId2').value;
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId2}`;
    //async/await
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Error al obtener la información del Pokémon');
        }
        const data = await response.json();

        const pokemonInfoDiv = document.getElementById('pokemonInfo2');
        pokemonInfoDiv.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}</p>
        `;
    } catch (error) {
        console.error('Error al obtener la información del Pokémon', error);
    }
}