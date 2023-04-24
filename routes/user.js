const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


// User Routes
router.get('/user', userController.getAllUsers);
router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUserByEmail);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;
