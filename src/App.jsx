import { useState, useEffect } from 'react';
import { TbPokeball } from 'react-icons/tb';
import pokemonType from './data/pokemonType';
import pokemonName from './data/pokemonName';


function App() {
  const [type, setType] = useState([]);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [typeName, setTypeName] = useState('');

  useEffect(() => {
    setType(pokemonType);
  }, []);

  // Mapping des types français vers les types anglais
  const typeMapping = {
    'Électrique': 'Electric',
    'Eau': 'Water',
    'Normal': 'Normal',
    'Plante/Poison': 'Grass'
  };

  const handleSearch = () => {
    // Utilise pokemonName pour obtenir le type en français
    const frenchTypeName = pokemonName(name);
    setTypeName(frenchTypeName);
    
    if (frenchTypeName !== 'Je ne connais pas ce pokémon') {
      // Utilise pokemonType pour obtenir la couleur correspondante
      const englishType = typeMapping[frenchTypeName] || frenchTypeName;
      const typeInfo = pokemonType.find(type => type.name === englishType);
      if (typeInfo) {
        setColor(typeInfo.color);
      } else {
        setColor('');
      }
    } else {
      setColor('');
    }
  };

  return (
    <div>
      <h1>
        <TbPokeball style={{ verticalAlign: 'middle', marginRight: '8px' }} />
        Mini Pokémon Chooser ⚡
      </h1>
      <div>
        <input type="text" placeholder="Entre le nom d'un pokémon et je te donne son type" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSearch}>Rechercher</button>
        {typeName && (
          <p style={{ color: color || 'inherit' }}>
            Le type du pokémon que vous avez recherché est : <strong>{typeName}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
