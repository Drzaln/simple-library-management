const conn = require("../config/connect");

module.exports = {
    getBorrowing: () => {
        return new Promise((resolve, reject) => {
            conn.query(
                "SELECT * FROM tb_pinjaman INNER JOIN tb_buku ON tb_pinjaman.id_buku = tb_buku.id_buku INNER JOIN tb_kategori ON tb_buku.id_kategori = tb_kategori.id_kategori INNER JOIN tb_peminjam ON tb_pinjaman.id_user = tb_peminjam.id_user",
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                }
            );
        });
    },
    insertBorrowing: data => {
        const data2 = "dipinjam";
        const id_buku = data.id_buku;
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO tb_pinjaman SET ?", data, (err, result) => {
                conn.query(
                    "UPDATE tb_buku SET status= ? WHERE id_buku=?",
                    [data2, id_buku],
                    (err, result) => {
                        if (!err) {
                            resolve(result);
                        } else {
                            reject(new Error(err));
                        }
                    }
                );
            });
        });
    },
    updateBorrowing: (id_user, data) => {
        return new Promise((resolve, reject) => {
            conn.query(
                "UPDATE tb_pinjaman SET ? WHERE id_user=?",
                [data, id_user],
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                }
            );
        });
    },
    deleteBorrowing: id_user => {
        return new Promise((resolve, reject) => {
            conn.query(
                "DELETE FROM tb_pinjaman WHERE id_user=?",
                id_user,
                (err, result) => {
                    if (!err) {
                        resolve(result);
                    } else {
                        reject(new Error(err));
                    }
                }
            );
        });
    }
};