const bookModel = require('../models/book.js')
const resp = require('../helpers/response')

module.exports = {
  getBook: (req, res) => {
    bookModel.getBook()
      .then((resultBook) => {
        resp.response(res, resultBook, 200)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getBookId: (req, res) => {
    const id_buku = req.params.id_buku
    bookModel.getBookId(id_buku)
      .then((resultBook) => {
        resp.response(res, resultBook, 200, id_buku)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  insertBook: (req, res) => {
    const data = {
      id_kategori: req.body.id_kategori,
      nama_buku: req.body.nama_buku,
      ringkasan: req.body.ringkasan,
      penulis_buku: req.body.penulis_buku,
      gmb_buku: req.body.gmb_buku,
      status_pinjam: 'ada',
      lokasi_buku: req.body.lokasi_buku
    }

    bookModel.insertBook(data)
      .then((resultBook) => {
        const result = resultBook
        resp.response(res, result, 200, data)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  updateBook: (req, res) => {
    const id_buku = req.params.id_book
    const data = {
      id_kategori: req.body.id_kategori,
      nama_buku: req.body.nama_buku,
      ringkasan: req.body.ringkasan,
      penulis_buku: req.body.penulis_buku,
      gmb_buku: req.body.gmb_buku,
      lokasi_buku: req.body.lokasi_buku
    }
    bookModel.updateBook(id_buku, data)
      .then((resultBook) => {
        const result = resultBook
        resp.response(res, result, 200, [id_buku, data])
      })
      .catch((error) => {
        console.log(error)
      })
  },
  deleteBook: (req, res) => {
    const id_buku = req.params.id_book
    bookModel.deleteBook(id_buku)
      .then((resultBook) => {
        const result = resultBook
        resp.response(res, result, 200, id_buku)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}