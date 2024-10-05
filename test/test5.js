const assert = require('assert');

function fetchData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [1, 2, 3, 4, 5],
        error: null
      });
    }, 3000); // Espera 3 segundos
  });
}

function processData(data) {
  // Simula una operación compleja con los datos
  return new Promise((resolve) => {
    setTimeout(() => {
      const sum = data.data.reduce((acc, curr) => acc + curr, 0);
      resolve(sum);
    }, 2000); // Espera 2 segundos
  });
}

describe('Flujo de datos asíncrono', () => {
  it('debe obtener los datos, procesarlos y obtener la suma correcta', async () => {
    const data = await fetchData('https://pokeapi.co/api/v2/pokemon/ditto');
    const sum = await processData(data);
    assert.strictEqual(sum, 15);
  });
});
