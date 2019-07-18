const borrowingModel = require('../models/borrowing')
const help = require('../helpers/response')

module.exports = {
    getBorrowing: (req, res) => {
        borrowingModel.getBorrowing()
            .then((resultBorrowing) => {
                help.response(res, resultBorrowing, 200)
            })
            .catch((error) => {
                console.log(error)
            })

    },
    insertBorrowing: (req, res) => {
        const data = {
            id_buku: req.body.id_buku,
            id_user: req.body.id_user,
            tgl_pinjam: new Date().getTime(),
            lama_pinjam: req.body.lama_pinjam,
            tgl_kembali: '',
            denda: '',
        }

        borrowingModel.insertBorrowing(data)
            .then((resultBorrowing) => {
                const result = resultBorrowing
                help.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error);
            })
    },

    updateBorrowing: (req, res) => {
        const id_user = req.params.id_borrowing
        const data = {
            id_user: req.body.id_borrowing,
            nama_user: req.body.nama_user,
        }
        borrowingModel.updateBorrowing(id_user, data)
            .then((resultBorrowing) => {
                const result = resultBorrowing
                help.response(res, result, 200, [id_user, data])
            })
            .catch((error) => {
                console.log(error);
            })
    },
    deleteBorrowing: (req, res) => {
        const id_user = req.params.id_borrowing

        borrowingModel.deleteBorrowing(id_user)
            .then((resultBorrowing) => {
                const result = resultBorrowing
                help.response(res, result, 200, id_user)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}