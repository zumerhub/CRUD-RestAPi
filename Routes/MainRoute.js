const express = require('express');

const { handlerGetAllUsers,
     hanleCreateNewUser,
     handlerGetUserById, hanlePatchUsersId, hanleDeleteUsersId } = require('../controllers/user.js');

const router = express.Router();

router.route('/')
.get(handlerGetAllUsers)
.post(hanleCreateNewUser) 

router.route('/:id')
.get(handlerGetUserById ) 
.patch(hanlePatchUsersId)
.delete(hanleDeleteUsersId)

// router.post('/', )


module.exports = router;