const { Sequelize, DataTypes } = require('sequelize');

// Définition de la table "Comment" et ses colonnes
function Comment(connectionSequelize) {
    return connectionSequelize.define('Comment', {
        // CREATION ID INUTILE => FAIT AUTOMATIQUEMENT PAR SEQUELIZE
        content: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    });
};


module.exports = Comment;