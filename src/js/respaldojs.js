// primer test de caro ;_;

describe("Funciones de main.js", () => {//Llamar a la función que quiero testear
  const calcularTarifa = require('../src/js/horarios');
  it("calcularTarifa es una función", () => {
      assert.ok(calcularTarifa);
  })
  const horarios = require('../src/js/main');
  it("horarios es una función", () => {
      assert.ok(horarios);
  })

});

// test de caro para validar contraseñas

const validatePassword= require('../src/js/validatePassword')
describe('Funciones de validatePassword.js', () => {

  it("validatePassword es una función", () => {
      assert.ok(validatePassword);
  });

  it('Contraseña no acepta asdfghjk, 12345678', () => { //test de caro
      assert.equal(validatePassword ('asdfghjk'),false);
      assert.equal(validatePassword ('12345678'),false);
});
}
)






