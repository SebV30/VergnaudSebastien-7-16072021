const { Sequelize, DataTypes } = require('sequelize');

// Définition de la table "Post" et ses colonnes
function Post(connectionSequelize) {
    return connectionSequelize.define('Post', {
        // CREATION ID INUTILE => FAIT AUTOMATIQUEMENT PAR SEQUELIZE
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // created: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.NOW
        // },
        // modified: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.NOW
        // },
    });
};


module.exports = Post;