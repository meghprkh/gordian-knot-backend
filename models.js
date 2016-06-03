var Sequelize = require('sequelize');

var sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'db.sqlite'
});

exports.sequelize = sequelize

var User = sequelize.define('user', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

exports.User = User

sequelize.sync().then(function () {
  return User.bulkCreate([
    { email: 'megh@gmail.com', password: 'password', name: 'Megh'},
    { email: 'megh2@gmail.com', password: 'password', name: 'Megh2'}
  ], { ignoreDuplicates: true })
})
