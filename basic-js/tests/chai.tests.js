'use strict'

const expect = require('chai').expect;
let should = require('chai').should();

describe('Pruebas basicas de chai', () =>{

    it('Objeto sin propiedad alucin ', done =>{
        const objeto = {value:''};
        objeto.should.not.haveOwnProperty('alucin');
        done();
    });

    it('Objeto con propiedad value', done => {
        const objeto = {value:''};
        objeto.should.haveOwnProperty('value');
        done();
    });

    it('Objecto con propuedad value y valor espécifico', done => {
        const objeto = {value:'guru de viaje'};
        objeto.should.haveOwnProperty('value');
        expect(objeto.value).to.be.equal('guru de viaje');
        done();
    });

});