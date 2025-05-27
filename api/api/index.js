const router = require('express').Router();
const { issues } = require('./mock');
const { users, accounts } = require('./users');
const { reply } = require('./utils');

router.get('/issues', (req, res) => {
  reply(res, issues);
});
router.get('/user/:userType', (req, res) => {
  reply(res, users[req.params.userType]);
});
router.get('/account/:userType', (req, res) => {
  reply(res, accounts[req.params.userType]);
});

module.exports = router;
