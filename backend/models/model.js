const conn = require('../config/connect')

module.exports = {
    booklist: (result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM tb_buku`, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    search: (id_buku, search) => {
        return new Promise((resolve, reject) => {
            const keyword = `%${search}%`
            const bokid = `%${id_buku}%`
            conn.query(`SELECT * FROM tb_buku WHERE id_buku LIKE ? OR nama_buku LIKE ? OR kategori LIKE ? OR lokasi LIKE ?`, [bokid, keyword, keyword, keyword], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    listId: (id_buku, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM buku WHERE id_buku = ?`, id_buku, (err, result) => {
                if(!err){
                    resolve(result)
                }else{
                    reject(new Error(err))
                }
            })
        })
    },

    cat: (kat, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM buku WHERE kategori = ?`, kat, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    loc: (lokasi_buku, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT * FROM buku WHERE lokasi_buku = ?`, lokasi_buku, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    add: (data, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO buku SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    updatebuku: (data, id_buku, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE buku SET ? WHERE id_buku=?`, [data, id_buku], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    remove: (id_buku, result) => {
        return new Promise((resolve, reject) => {
            conn.query(`DELETE FROM buku WHERE id_buku = ?` , id_buku, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
