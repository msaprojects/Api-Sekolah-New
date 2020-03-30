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

    connection.query('SELECT * FROM visi where idsekolah = ? Order By nomer ASC',
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
    
    connection.query('INSERT INTO visi ( nomer, isi, idsekolah) VALUES ( ?, ?, ?);',
    [ nama, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Visi berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var nomer = req.body.nomer;
    var isi = req.body.isi;
    var idvisi = req.body.idvisi;

    connection.query('UPDATE visi SET nomer = ?, isi = ? WHERE idvisi = ?',
    [ nomer, isi, idvisi ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Visi berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.Hapus = function(req, res){
    
    var idvisi = req.body.idvisi;

    connection.query('DELETE FROM visi where idvisi = ?',
    [ idvisi ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Visi berhasil di hapus!", res)
            }
        }
    );
};
