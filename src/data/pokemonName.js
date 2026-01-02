const pokemonTypes = {
    Pikachu: 'Électrique',
    Bulbizarre: 'Plante/Poison',
    Herbizarre: 'Plante/Poison',
    Florizarre: 'Plante/Poison',

    Carapuce: 'Eau',
    Carabaffe: 'Eau',
    Tortank: 'Eau',

    Salamèche: 'Feu',
    Reptincel: 'Feu',
    Dracaufeu: 'Feu/Vol',

    Ratata: 'Normal',
    Rattatac: 'Normal',

    Roucool: 'Normal/Vol',
    Roucoups: 'Normal/Vol',
    Roucarnage: 'Normal/Vol'
};

function pokemonName(name) {
    return pokemonTypes[name] || 'Je ne connais pas ce Pokémon';
}

export default pokemonName;
