var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

router.get('/author', function(req, res) {
    res.render('author', {
        author: {
            name: 'José Manuel Rosa Moncayo',
            photo: 'https://secure.gravatar.com/avatar/bef83d63fae4a2f8b7f038654df9b771?size=496'
        }
    })
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);

module.exports = router;
