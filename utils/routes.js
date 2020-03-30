'use strict';

module.exports = function(app){

//SETIAP ROUTE TOLONG DI KASIH TAG SESUAI DENGAN NAMA TABEL TAPI SEMUA HURUF DI CAPITAL

    // SEKOLAH
    var RouteToSekolah = require('../controllers/sekolahController');
    app.route('/sekolah').get(RouteToSekolah.List);
    app.route('/sekolah/:idsekolah').get(RouteToSekolah.Detail);
    app.route('/sekolah').post(RouteToSekolah.Tambah);
    app.route('/sekolah').put(RouteToSekolah.Edit);
    
    // VISI
    var RouteToVisi = require('../controllers/visiController');
    app.route('/visi/:idsekolah').get(RouteToVisi.Detail);
    app.route('/visi').post(RouteToVisi.Tambah);
    app.route('/visi').put(RouteToVisi.Edit);
    app.route('/hapusvisi').post(RouteToVisi.Hapus);

    // MISI
    var RouteToMisi = require('../controllers/misiController');
    app.route('/misi/:idsekolah').get(RouteToMisi.Detail);
    app.route('/misi').post(RouteToMisi.Tambah);
    app.route('/misi').put(RouteToMisi.Edit);
    app.route('/hapusmisi').post(RouteToMisi.Hapus);

    // QUOTE
    var RouteToQuote = require('../controllers/quotesController');
    app.route('/quote/:idsekolah').get(RouteToQuote.Detail);
    app.route('/quote').post(RouteToQuote.Tambah);
    app.route('/quote').put(RouteToQuote.Edit);
    app.route('/hapusquote').post(RouteToQuote.Hapus);
    
    // JURUSAN
    var RouteToJurusan = require('../controllers/jurusanController');
    app.route('/jurusan/:idsekolah').get(RouteToJurusan.Detail);
    app.route('/jurusan').post(RouteToJurusan.Tambah);
    app.route('/jurusan').put(RouteToJurusan.Edit);
    app.route('/hapusjurusan').post(RouteToJurusan.Hapus);

    // JABATAN
    var RouteToJabatan = require('../controllers/jabatanController');
    app.route('/jabatan/:idsekolah').get(RouteToJabatan.Detail);
    app.route('/jabatan').post(RouteToJabatan.Tambah);
    app.route('/jabatan').put(RouteToJabatan.Edit);
    app.route('/hapusjabatan').post(RouteToJabatan.Hapus);

    // ABOUT
    var RouteToAbout = require('../controllers/aboutController');
    app.route('/about/:idsekolah').get(RouteToAbout.Detail);
    app.route('/about').post(RouteToAbout.Tambah);
    app.route('/about').put(RouteToAbout.Edit);
    app.route('/hapusabout').post(RouteToAbout.Hapus);

}