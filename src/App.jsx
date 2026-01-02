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
    'Plante': 'Grass',
    'Poison': 'Poison',
    'Feu': 'Fire',
    'Vol': 'Flying'
  };

  // Fonction pour obtenir la couleur d'un type
  const getTypeColor = (frenchType) => {
    const englishType = typeMapping[frenchType] || frenchType;
    const typeInfo = pokemonType.find(type => type.name === englishType);
    return typeInfo ? typeInfo.color : '';
  };

  // Fonction pour rendre le texte avec deux couleurs si c'est un double type
  const renderTypeName = (typeName) => {
    if (typeName.includes('/')) {
      const [type1, type2] = typeName.split('/');
      const color1 = getTypeColor(type1.trim());
      const color2 = '#808080'; // Gris pour le deuxième type
      
      return (
        <>
          <span style={{ color: color1 || 'inherit' }}>{type1}</span>
          <span style={{ color: '#808080' }}>/</span>
          <span style={{ color: color2 }}>{type2}</span>
        </>
      );
    }
    return <span style={{ color: color || 'inherit' }}>{typeName}</span>;
  };

  const handleSearch = () => {
    // Utilise pokemonName pour obtenir le type en français
    const frenchTypeName = pokemonName(name);
    setTypeName(frenchTypeName);
    
    if (frenchTypeName !== 'Je ne connais pas ce pokémon' && !frenchTypeName.includes('/')) {
      // Utilise pokemonType pour obtenir la couleur correspondante (uniquement pour types simples)
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
          <p>
            Le type du pokémon que vous avez recherché est : <strong>{renderTypeName(typeName)}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
