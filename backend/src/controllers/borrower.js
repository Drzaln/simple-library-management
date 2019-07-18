const borrowerModel = require('../models/borrower')
const help = require('../helpers/response')

module.exports = {
  getBorrower: (req, res) => {
    borrowerModel.getBorrower()
      .then((resultBorrower) => {
        help.response(res, resultBorrower, 200)
      })
      .catch((error)=>{
        console.log(error)
      })
      
  },
  insertBorrower: (req, res) => {
    const data = {
      id_user: req.body.id_borrower,
      nama_user: req.body.nama_user,
    }
    
    borrowerModel.insertBorrower(data)
      .then((resultBorrower) => {
        const result = resultBorrower
        help.response(res, result, 200, data)
      })
      .catch((error) => {
        console.log(error);
      })
  },

  updateBorrower: (req, res) => {
    const id_user = req.params.id_borrower
    const data = {
      id_user: req.body.id_borrower,
      nama_user: req.body.nama_user,
    }
    borrowerModel.updateBorrower(id_user, data)
      .then((resultBorrower) => {
        const result = resultBorrower
        help.response(res, result, 200, [id_user, data])
      })
      .catch((error) => {
        console.log(error);
      })
  },
  deleteBorrower: (req, res) => {
    const id_user = req.params.id_borrower

    borrowerModel.deleteBorrower(id_user)
      .then((resultBorrower) => {
        const result = resultBorrower
        help.response(res, result, 200, id_user)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}