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

    connection.query('SELECT * FROM about where idsekolah = ?',
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

    var judul = req.body.judul;
    var keterangan = req.body.keterangan;
    var idsekolah = req.body.idsekolah;
    
    connection.query('INSERT INTO about (judul, keterangan, idsekolah) VALUES (?, ?, ?);',
    [ judul, keterangan, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("About berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var judul = req.body.judul;
    var keterangan = req.body.keterangan;
    var idabout = req.body.idabout;

    connection.query('UPDATE about SET judul = ?, keterangan = ? WHERE idabout = ?',
    [ judul, keterangan, idabout ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("About berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.Hapus = function(req, res){
    
    var idabout = req.body.idabout;

    connection.query('DELETE FROM about where idabout = ?',
    [ idabout ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("About berhasil di hapus!", res)
            }
        }
    );
};
