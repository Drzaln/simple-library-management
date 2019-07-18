const conn = require('../config/connect')

module.exports = {
    getBorrower: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM tb_peminjam', (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    insertBorrower: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO tb_peminjam SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateBorrower: (id_user, data) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE tb_peminjam SET ? WHERE id_user=?', [data, id_user], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteBorrower: (id_user) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM tb_peminjam WHERE id_user=?', id_user, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}
