const express = require('express');
const UserController = require('../controller/user.controller');

const router = express.Router();
const userController = new UserController();

router.post('/lead', (req, res, next) => {
  userController.createLead(req, res, next).catch(next);
});

router.get('/leads/newest', (req, res, next) => {
  userController.getLeadsSorted(req, res, next).catch(next);
});

router.get('/leads/download', (req, res, next) => {
  userController.downloadLeads(req, res, next).catch(next);
});

module.exports = {
  path: '/user',
  router,  // This must be the express router instance
};

