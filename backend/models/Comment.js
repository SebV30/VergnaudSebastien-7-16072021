const { Sequelize, DataTypes } = require('sequelize');

// Définition de la table "Comment" et ses colonnes
function Comment(connectionSequelize) {
    return connectionSequelize.define('Comment', {
        // CREATION ID INUTILE => FAIT AUTOMATIQUEMENT PAR SEQUELIZE
        content: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        modified: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
    });
};


module.exports = Comment;