var request = require('request');
var express = require('express');
var router = express.Router();

const API_IP = 'http://192.168.43.100:3000';

/* GET users listing. */
router.get('/', function(req, res, next) {
  request.get({
    url: `${API_IP}/users`,
    json: true
  }, function(e, r, users) {
    res.render('users', {
      bodyClass: 'students',
      title: '- Students',
      students: users
    });
  });
});

router.post('/', function(req, res, next) {
  const user = req.body;
  request
    .post({
      url: `${API_IP}/users`,
      form: user
    }, (err, response) => {
      res.redirect('/users');
    });
});

router.put('/', function(req, res, next) {
  request
    .put({
      url: `${API_IP}/users/${req.body.id}`,
      form: req.body
    }, (err, response) => {
      res.redirect('/users');
    });
});

router.delete('/', function(req, res, next) {
  request
    .del({
      url: `${API_IP}/users/${req.body.id}`,
    }, (err, response) => {
      res.redirect('/users');
    });
});

router.get('/new', function(req, res, next) {
  res.render('user', {
    bodyClass: 'student',
    title: '- Student'
  });
});

router.get('/:id', function(req, res, next) {
  request.get({
    url: `${API_IP}/users/${req.params.id}`,
    json: true
  }, function(e, r, user) {
    res.render('user', {
      bodyClass: 'student',
      title: '- Student',
      student: user
    });
  });
});

module.exports = router;
