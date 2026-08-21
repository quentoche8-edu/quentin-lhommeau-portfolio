# Portfolio de Quentin Lhommeau

Portfolio statique pour GitHub Pages — futur ingénieur en génie maritime et côtier.

## Structure du dossier

```
docs/
├── index.html      # Page principale
├── styles.css      # Feuille de style (palette maritime, responsive)
├── app.js          # Interactions simples (menu mobile)
└── README.md       # Ce fichier
```

## Déploiement sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub (par exemple `portfolio-quentin-lhommeau`).
2. Copiez le contenu du dossier `docs/` à la racine de ce dépôt.
3. Dans les paramètres du dépôt (`Settings > Pages`), choisissez comme source :
   - **Deploy from a branch** → sélectionnez la branche `main` et le dossier `/ (root)`.
4. Enregistrez. Votre site sera accessible après quelques minutes à l'adresse :
   `https://votre-username.github.io/portfolio-quentin-lhommeau/`

> Vous pouvez aussi nommer le dépôt `votre-username.github.io` pour que le site soit directement à la racine de votre domaine utilisateur.

## Personnalisation

- **Textes** : modifiez directement le contenu dans `index.html`.
- **Photo de profil** : remplacez le fichier `photo_profil.jpg` à côté de `index.html`.
- **CV** : remplacez `cv_quentin_lhommeau.pdf`.
- **Rapports/projets** : remplacez les fichiers PDF liés dans la section "Documents".
- **Couleurs** : ajustez les variables CSS en haut de `styles.css`.
- **Typographie** : les polices Google Fonts (Urbanist + Epilogue) sont chargées dans le `<head>` de `index.html`.

## Prévisualisation locale

Ouvrez simplement `index.html` dans votre navigateur, ou lancez un serveur local :

```bash
python3 -m http.server 8000
```

Puis accédez à `http://localhost:8000`.

## Licence

© 2026 Quentin Lhommeau. Tous droits réservés.
