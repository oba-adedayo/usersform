  const express = require('express');
  const router = express.Router();
  const userController = require("../controllers/user.controller");
  router.get('/',userController.getLandingPage);
  router.post('/signup',userController.regUser);
  module.exports = router