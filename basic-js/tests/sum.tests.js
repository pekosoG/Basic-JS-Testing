'use strict'

let expect = require('chai').expect;
const suma = require('../controllers/sum');

describe('Pruebas basicas de suma', () =>{
    it('prueba erronea de la función de suma', done =>{
        expect(suma(1,2)).not.to.be.equals(4);
        done();
    });

    it('prueba de la función de suma', done =>{
        expect(suma(1,2)).to.be.equals(3);
        done();
    });
});