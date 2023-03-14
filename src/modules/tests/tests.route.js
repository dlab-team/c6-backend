const express = require('express');
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated');
const checkAdminRole = require('../../middelwares/checkAdminRole')
const testsRouter = express.Router();
const testsControllers = require('./testsControllers');

testsRouter.get('/tests', isUserAuthenticated, testsControllers.getTests);
testsRouter.get('/tests/:id', isUserAuthenticated, testsControllers.getTestsById);
testsRouter.post('/tests', isUserAuthenticated, checkAdminRole, testsControllers.postTest);
testsRouter.put('/tests/:id', isUserAuthenticated, checkAdminRole, testsControllers.updateTestDeleted);

module.exports = testsRouter