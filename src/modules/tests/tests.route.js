const express = require('express');
const isUserAuthenticated = require('../../middelwares/isUserAuthenticated');
const testsRouter = express.Router();
const testsControllers = require('./testsControllers');

testsRouter.get('/tests', isUserAuthenticated ,testsControllers.getTests);
testsRouter.get('/tests/:id', testsControllers.getTestsById);
testsRouter.post('/tests', testsControllers.postTest);
testsRouter.put('/tests/:id', testsControllers.updateTestDeleted);


module.exports = testsRouter