# ⚡ Mini Pokémon Builder

Une application web interactive construite avec React et Vite qui permet de rechercher des Pokémon et d'obtenir leurs types avec les couleurs correspondantes.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Fonctionnalités

- 🔍 **Recherche de Pokémon** : Entrez le nom d'un Pokémon pour découvrir son type
- 🎨 **Affichage coloré** : Les types sont affichés avec leurs couleurs officielles
- 🌐 **Interface en français** : Interface utilisateur entièrement en français
- ⚡ **Performance optimale** : Construit avec Vite pour un chargement ultra-rapide

## 🚀 Démarrage rapide

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation

1. Clonez le repository :
```bash
git clone https://github.com/ThibautRingDev/mini-pokemon.git
cd mini-pokemon
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez le serveur de développement :
```bash
npm run dev
```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement `http://localhost:5173`)

## 📦 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🏗️ Structure du projet

```
mini-pokemon/
├── src/
│   ├── components/          # Composants React
│   ├── data/
│   │   ├── pokemonName.js  # Fonction de recherche de type par nom
│   │   └── pokemonType.js  # Base de données des types et couleurs
│   ├── styles/
│   │   └── main.css        # Styles principaux
│   ├── App.jsx             # Composant principal
│   └── main.jsx            # Point d'entrée de l'application
├── public/                  # Fichiers statiques
├── index.html              # Template HTML
└── package.json            # Dépendances et scripts
```

## 🎮 Utilisation

1. Entrez le nom d'un Pokémon dans le champ de recherche (ex: Pikachu, Bulbizarre, Carapuce, Ratata)
2. Cliquez sur le bouton "Rechercher"
3. Le type du Pokémon s'affiche avec sa couleur officielle

### Pokémon supportés

- **Pikachu** → Type : Électrique ⚡
- **Bulbizarre** → Type : Plante/Poison 🌿
- **Carapuce** → Type : Eau 💧
- **Ratata** → Type : Normal 🐭

## 🛠️ Technologies utilisées

- **React 19.2.0** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **Vite 7.2.4** - Outil de build et serveur de développement ultra-rapide
- **ESLint** - Linter pour maintenir la qualité du code

## 📝 Fonctionnalités à venir

- [ ] Ajout de plus de Pokémon
- [ ] Recherche par type
- [ ] Affichage des statistiques des Pokémon
- [ ] Mode sombre
- [ ] Responsive design amélioré

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !
