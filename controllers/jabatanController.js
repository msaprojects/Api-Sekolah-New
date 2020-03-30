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

    connection.query('SELECT * FROM jabatan where idsekolah = ?',
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
    var idsekolah = req.body.idsekolah;
    
    connection.query('INSERT INTO jabatan ( nama, idsekolah) VALUES ( ?, ? );',
    [ nama, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Jabatan berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var nama = req.body.nama;
    var idjabatan = req.body.idjabatan;

    connection.query('UPDATE jurusan SET nama = ? WHERE idjabatan = ?',
    [ nama, idjabatan ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Jabatan berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.Hapus = function(req, res){
    
    var idjabatan = req.body.idjabatan;

    connection.query('DELETE FROM jabatan where idjabatan = ?',
    [ idjabatan ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Jabatan berhasil di hapus!", res)
            }
        }
    );
};
