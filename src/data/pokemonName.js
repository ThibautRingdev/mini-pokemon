function pokemonName(name) {
    if (name === 'Pikachu')
        return 'Électrique';
    if (name === 'Bulbizarre')
        return 'Plante/Poison';
    if (name === 'Carapuce')
        return 'Eau';
    if (name === 'Ratata')
        return 'Normal';
    else
        return 'Je ne connais pas ce pokémon';
}

export default pokemonName;