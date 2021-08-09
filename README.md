# OBJECTIFS :

- La présentation des fonctionnalités doit être simple.
- La création d’un compte doit être simple et possible depuis un téléphone mobile.
- Le profil doit contenir très peu d’informations pour que sa complétion soit rapide.
- La suppression du compte doit être possible.
- L’accès à à un forum où les salariés publient des textes et des contenus multimédia doit être présent.
- Les utilisateurs doivent pouvoir facilement repérer les dernières participations des employés.
- Le/La chargé(e) de communication Groupomania doit pouvoir modérer les interactions entre salariés.

# DÉMARRAGE DU BACKEND :

Pour démarrer le backend et accéder à la base de données, vous devrez suivre ces deux étapes :

- Utiliser "nodemon server" dans votre terminal :
  => c:\"répertoire ou se situe le repo"> cd backend
  => c:\"répertoire ou se situe le repo"\backend> nodemon server
- Remplir les valeurs attendues dans le fichier .env-test (vos identifiants et mot de passe MySql + renseigner le token) PUIS renommer ce fichier en ".env" pour pouvoir vous connecter et accéder à la base de données de façon à ce que le code, utilisant les variables d'environnement (pour ne pas avoir à écrire ces paramètres de connexion en dur dans le code), reste fonctionnel .

# DÉMARRAGE DU FRONTEND :

Utiliser "serve" dans votre terminal :
=> c:\"répertoire ou se situe le repo"> cd frontend
=> c:\"répertoire ou se situe le repo"\backend> npm run serve

# DÉPENDANCES UTILISÉES :

# BACKEND :

- bcrypt
- body-parser
- dotenv
- express
- express-rate-limit
- helmet
- jsonwebtoken
- multer
- mysql2
- nodemon
- sequelize

# FRONTEND :

- axios
- core-js
- moment
- vue
- vue-jwt-decode
- vue-router
- vuelidate
