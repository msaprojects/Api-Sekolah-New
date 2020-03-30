'use strict';

var response = require('../utils/reqcode');
var connection = require('../utils/connection');

// Struktur Controller tolong disesuaikan dengan fungsi yang di pakai -
//     contoh jika tidak ada fungsi hapus di note controller structure bagian hapus di hilangkan

// Controller Structure
// + controller
// |- Detail Data
// |- Insert Data
// |- Update Data
// |- Hapus Data

// DETAIL DATA SEKOLAH
exports.Detail = function(req, res){

    var idsekolah = req.params.idsekolah;

    connection.query('SELECT * FROM jurusan where idsekolah = ?',
    [ idsekolah ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok(rows, res)
            }
        }
    );
};

// TAMBAH DATA SEKOLAH
exports.Tambah = function(req, res){

    var nama = req.body.nama;
    var aktif = req.body.aktif;
    var idsekolah = req.body.idsekolah;
    
    connection.query('INSERT INTO jurusan (nama, aktif, idsekolah) VALUES (?, ?, ?);',
    [ nama, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Jurusan berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var nama = req.body.nama;
    var aktif = req.body.aktif;
    var idjurusan = req.body.idjurusan;

    connection.query('UPDATE jurusan SET nama = ?, aktif = ? WHERE idjurusan = ?',
    [ nama, aktif, idjurusan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Jurusan berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.Hapus = function(req, res){
    
    var idjurusan = req.body.idjurusan;

    connection.query('DELETE FROM jurusan where idjurusan = ?',
    [ idjurusan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Jurusan berhasil di hapus!", res)
            }
        }
    );
};
