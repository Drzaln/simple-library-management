const userModel = require('../models/user')
const help = require('../helpers/response')

module.exports = {
  getUser: (req, res) => {
    userModel.getUser()
      .then((resultUser) => {
        help.response(res, resultUser, 200)
      })
      .catch((error)=>{
        console.log(error)
      })
      
  },
  insertUser: (req, res) => {
    const data = {
      id_user: req.body.id_user,
      nama_user: req.body.nama_user,
    }
    
    userModel.insertUser(data)
      .then((resultUser) => {
        const result = resultUser
        help.response(res, result, 200, data)
      })
      .catch((error) => {
        console.log(error);
      })
  },

  updateUser: (req, res) => {
    const id_user = req.params.id_user
    const data = {
      id_user: req.body.id_user,
      nama_user: req.body.nama_user,
    }
    userModel.updateUser(id_user, data)
      .then((resultUser) => {
        const result = resultUser
        help.response(res, result, 200, [id_user, data])
      })
      .catch((error) => {
        console.log(error);
      })
  },
  deleteUser: (req, res) => {
    const id_user = req.params.id_user

    userModel.deleteUser(id_user)
      .then((resultUser) => {
        const result = resultUser
        help.response(res, result, 200, id_user)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}