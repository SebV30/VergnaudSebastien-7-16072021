const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

const sequelize = new Sequelize('groupomania', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

// Définition de la table "Post" et ses colonnes
const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    modified: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
});

// (async() => {
//     await sequelize.sync({ force: true });
//     // Code here
// })();

Post.sync()
    .then(() => console.log('La table Post a été créée dans la base de donnée'))
    .catch(error => console.error('Une erreur est survenue', error));

module.exports = Post;