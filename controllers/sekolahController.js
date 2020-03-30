'use strict';

var response = require('../utils/reqcode');
var connection = require('../utils/connection');

// Struktur Controller tolong disesuaikan dengan fungsi yang di pakai -
//     contoh jika tidak ada fungsi hapus di note controller structure bagian hapus di hilangkan

// Controller Structure
// + controller
// |- List Data
// |- Detail Data
// |- Insert Data
// |- Update Data

// LIST DATA SEKOLAH
exports.List = function(req, res){
    connection.query('SELECT * FROM sekolah', function(error, rows, fields){
        if(error){
            response.servererror(console.log(error), res)
        }else{
            response.ok(rows, res)
        }
    });
};
// DETAIL DATA SEKOLAH
exports.Detail = function(req, res){

    var idsekolah = req.params.idsekolah;

    connection.query('SELECT * FROM sekolah where idsekolah = ?',
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

    var logo = req.body.logo;
    var nama_sekolah = req.body.nama_sekolah;
    var alamat = req.body.alamat;
    var kontak = req.body.kontak;
    var email = req.body.email;
    var website = req.body.website;
    var aktif = req.body.aktif;
    
    connection.query('INSERT INTO sekolah ( nama_sekolah, alamat, kontak, email, website, aktif, logo) VALUES ( ?, ?, ?, ?, ?, ?, ? );',
    [ nama_sekolah, alamat, kontak, email, website, aktif, logo ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Sekolah berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var logo = req.body.logo;
    var nama_sekolah = req.body.nama_sekolah;
    var alamat = req.body.alamat;
    var kontak = req.body.kontak;
    var email = req.body.email;
    var website = req.body.website;
    var idsekolah = req.body.idsekolah;
    var aktif = req.body.aktif;

    connection.query('UPDATE sekolah SET logo = ?, nama_sekolah = ?, alamat = ?, kontak = ?, email = ?, website = ?, aktif = ? WHERE idsekolah = ?',
    [ logo, nama_sekolah, alamat, kontak, email, website, aktif, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Data Sekolah berhasil di perbarui!", res)
            }
        }
    );
};