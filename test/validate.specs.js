const assert = require('chai').assert;

global.window = global;
require('../src/js/validate'); //Sólo enlaza el archivo, parecido al script de html

describe('Validar emails', () => { //Describe lo que habrá dentro de cada función
    describe('Debería verificar si existe el arroba', () => {
        it('Debería el correo tener solo un arroba', () => { //Caso de prueba
            assert.equal(validateEmail("asdf@asdf.com"), true); //assert.equal verifica que el parámetro 1 sea igual al parámetro 2
            assert.equal(validateEmail("asdf@@asdf.com"), false); //validate email es el nombre de mi funcion
            assert.equal(validateEmail("asdf.com"), false);
        });
        it('Debería el correo tener un arroba antes del dominio', () => {
            assert.equal(validateEmail(".com@asdf"), false);
            assert.equal(validateEmail("fabian@laboratoria.la"), true);
        });
    }); (
        describe('Debería verificar si tiene un dominio', () => {
            it('Tiene un punto y luego solo caracteres del alfabeto', () => {
                assert.equal(validateEmail('asdf@asdf'), false);
                assert.equal(validateEmail('asdf@asdf.'), false);
            });
        }));

    describe('Debería verificar que tenga al menos 1 caracter antes del arroba', () => {
        it('Obtiene un caracter antes de la @', () => { //test de caro
            assert.equal(validateEmail('@asdf.com'), false);
        })
    });

    describe('Debería verificar que no tenga carácteres raros', () => { // test de caro
        it('no existe !#$%^&*()+=-[]\\\';,/{}|\":<>? en el email', () => {
            assert.equal(validateEmail('as*df@asdf.com'),false);

        })
    });
});

