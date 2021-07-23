const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

const sequelize = new Sequelize('groupomania', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => console.log('Connection to the database has been established succesfully.'))
    .catch(error => console.error('Unable to connect do the database', error));

const db = {};
db.User = User(sequelize);
db.Post = Post(sequelize);
db.Comment = Comment(sequelize)


//-----------ASSOCIATIONS---------------
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
db.User.hasMany(db.Comment);
db.Comment.belongsTo(db.User);
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);


(async() => {
    await sequelize.sync({ force: true });
})();

module.exports = db;