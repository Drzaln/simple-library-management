const resp = require("../helpers/response");
const conn = require("../config/connect");
const model = require("../models/model");

exports.booklist = (req, res) => {
  model
    .booklist()
    .then(resultBook => {
      const result = resultBook[0];
      if (result === undefined) {
        res.json({
          status: 404,
          message: "Data tidak ditemukan"
        });
      }
      resp.response(res, resultBook, 200);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.search = (req, res) => {
  const search = req.query.search;
  const bookid = req.query.bookid;
  model
    .search(bookid, search)
    .then(resultBook => {
      const result = resultBook[0];
      if (result === undefined) {
        res.json({
          status: 404,
          message: "Data tidak ditemukan"
        });
      }
      resp.response(res, result, 200);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.listId = (req, res) => {
  const bookid = req.params.bookid;

  model
    .listId(bookid)
    .then(resultBook => {
      const result = resultBook[0];
      if (result === undefined) {
        res.json({
          status: 404,
          message: "Data tidak ditemukan"
        });
      }
      resp.response(res, result, 200);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.cat = (req, res) => {
  let kat = req.params.kategori;

  model
    .cat(kat)
    .then(resultBook => {
      const result = resultBook[0];
      if (result === undefined) {
        res.json({
          status: 404,
          message: "Data tidak ditemukan"
        });
      }
      resp.response(res, result, 200);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.loc = (req, res) => {
  let lok = req.params.lokasi;

  model
    .loc(lok)
    .then(resultBook => {
      const result = resultBook[0];
      if (result === undefined) {
        res.json({
          status: 404,
          message: "Data tidak ditemukan"
        });
      }
      resp.response(res, result, 200);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.add = (req, res) => {
  const data = {
    nama_buku: req.body.nama_buku,
    penulis: req.body.penulis,
    lokasi: req.body.lokasi,
    kategori: req.body.kategori
  };

  model
    .add(data)
    .then(() => {
      resp.response(res, data, 200);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.updatebook = (req, res) => {
  let bookid = req.params.bookid;

  const data = {
    nama_buku: req.body.nama_buku,
    penulis: req.body.penulis,
    lokasi: req.body.lokasi,
    kategori: req.body.kategori
  };

  model
    .updatebook(data, bookid)
    .then(() => {
      resp.response(res, data, 200);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.remove = (req, res) => {
  let bookid = req.params.bookid;

  model
    .remove(bookid)
    .then(() => {
      resp.response(res, bookid, 200);
    })
    .catch(err => {
      console.log(err);
    });
};
