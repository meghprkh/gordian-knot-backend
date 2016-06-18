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

var Question = sequelize.define('question', {
  qno: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  answer: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

exports.Question = Question

sequelize.sync().then(function () {
  return User.bulkCreate([
    { email: 'megh@gmail.com', password: 'password', name: 'Megh'},
    { email: 'megh2@gmail.com', password: 'password', name: 'Megh2'}
  ], { ignoreDuplicates: true })
}).then(function () {
  return Question.bulkCreate([
    { qno: 1, title: 'Q1', body: 'Question 1', answer: 1 },
    { qno: 3, title: 'Q3', body: 'Question 3', answer: 3 },
    { qno: 2, title: 'Q2', body: 'Question 2', answer: 2 },
    { qno: 4, title: 'Q4', body: 'Question 4', answer: 4 },
    { qno: 5, title: 'Q5', body: 'Question 5', answer: 5 },
  ], { ignoreDuplicates: true })
})
