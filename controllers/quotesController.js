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

    connection.query('SELECT * FROM quotes where idsekolah = ?',
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

    var idsekolah = req.body.idsekolah;
    var isi = req.body.isi;
    
    connection.query('INSERT INTO quotes (isi, idsekolah) VALUES (?, ?);',
    [ isi, idsekolah ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Quotes berhasil di tambahkan!", res)
            }
        }
    );
};
// UPDATE DATA Satuan
exports.Edit = function(req, res){

    var isi = req.body.isi;
    var idquotes = req.body.idquotes;

    connection.query('UPDATE quotes SET isi = ? WHERE idquotes = ?',
    [ isi, idquotes ],
        function(error, rows, fields){
            if(error){
                response.servererror(console.log(error), res)
            }else{
                response.created("Quotes berhasil di perbarui!", res)
            }
        }
    );
};
// HAPUS DATA Satuan
exports.Hapus = function(req, res){
    
    var idquotes = req.body.idquotes;

    connection.query('DELETE FROM quotes where idquotes = ?',
    [ idquotes ],
        function(error, rows, fields){
            if(error){
                response.forbidden(console.log(error), res)
            }else{
                response.ok("Quotes berhasil di hapus!", res)
            }
        }
    );
};
