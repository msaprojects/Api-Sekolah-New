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

    connection.query('SELECT * FROM misi where idsekolah = ? Order By nomer ASC',
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
    
    connection.query('INSERT INTO misi ( nomer, isi, idsekolah) VALUES ( ?, ?, ?);',
    [ nama, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Misi berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var nomer = req.body.nomer;
    var isi = req.body.isi;
    var idmisi = req.body.idmisi;

    connection.query('UPDATE misi SET nomer = ?, isi = ? WHERE idmisi = ?',
    [ nomer, isi, idmisi ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Misi berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.Hapus = function(req, res){
    
    var idmisi = req.body.idmisi;

    connection.query('DELETE FROM misi where idmisi = ?',
    [ idmisi ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Misi berhasil di hapus!", res)
            }
        }
    );
};
