//ATTENTION FAIRE "{Sequelize, DataTypes}" SI ON UTILISE SEQUELIZE DANS LE MODEL
//(EX: Sequelize.NOW => horodatage)
const { DataTypes } = require('sequelize');

// Définition de la table "User" et ses colonnes
function User(connectionSequelize) {
    return connectionSequelize.define('User', {
        // CREATION ID INUTILE => FAIT AUTOMATIQUEMENT PAR SEQUELIZE
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isadmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });
};

module.exports = User;