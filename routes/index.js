var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query)
  if ((req.query['p1'] === undefined || req.query['p2'] === undefined)) {
    res.render('ask', {
      'title': "No input"
    });
  } else {
    data = {
      'p1': {
        'lseason': {
          'win1': "7:44.00",
          'win2': "7:50.00",
          'win3': "8:32.00"
        },
        'cseason': {
          'win1': "7:44.00",
          'win2': "8:01.00",
          'win3': "8:10.00"
        },
        'pb': "6:22.00",
        'avg': "8:02.00",
        'win': 7,
        'loss': 2
      },
      'p2': {
        'lseason': {
          'win1': "8:23.00",
          'win2': "9:48.00",
          'win3': "12:22.00"
        },
        'cseason': {
          'win1': "7:23.00",
          'win2': "8:42.00",
          'win3': "8:44.00"
        },
        'pb': "7:15.00",
        'win': 6,
        'loss': 0
      }
    }
    res.render('index', {
      'player1': req.query["p1"],
      'player2': req.query["p2"],
      'data': data
    });
  }
});

module.exports = router;
