var router = require('express').Router();
var config = require('./config');
var models = require('./models');
var middleware = require('./middleware');

router.get('/:qno', (req, res) => {
  const { qno } = req.params;
  models.Question.findOne({
    where : { qno },
    attributes: {exclude: ['answer']}
  }).then(question => {
    if (question) res.send(question);
    else res.sendStatus(400);
  })
});

router.post('/check/:qno', (req, res) => {
  const { qno } = req.params;
  const { answer } = req.body;
  models.Question.findOne({where : { qno }})
    .then(question => {
      if (question) res.send({result: question.answer == answer});
      else res.sendStatus(400);
    })
})

module.exports = router;
