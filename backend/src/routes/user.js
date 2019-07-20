const express = require('express')
const Route = express.Router()

const userController = require('../controllers/user')
 
Route 
  .get('/', userController.getUser)
  .post(`/`, userController.insertUser)
  .patch(`/:id_user`, userController.updateUser)
  .delete(`/:id_user`, userController.deleteUser)

module.exports = Route