'use strict'

let chai = require('chai');
let expect = chai.expect;
let should = chai.should();
let chaiHttp = require('chai-http');
let server = require('./../../index');

chai.use(chaiHttp);
var request = chai.request(server).keepOpen();

describe('Pruebas para el modulo de Testo',()=>{

    it('Prueba del GET, 200OK', done => {
        request.get('/testo')
        .end((err,res)=>{
            if(err) done(err);
            res.should.have.status(200);
            done();
        });
    });

    it('Prueba del GET, 401 Si no tiene Auth');

    it('Prueba del POST, 200OK')
    it('Prueba del POST, 400 Malformed Request')
});