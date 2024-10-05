const assert = require('assert');

function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulación de una petición HTTP (reemplaza esto con una librería real como axios)
    setTimeout(() => {
      if (url === 'https://api.example.com/data') {
        resolve({ data: 'Hola desde la API' });
      } else {
        reject(new Error('URL no válida'));
      }
    }, 1000);
  });
}

describe('Función fetchData', () => {
  it('debe resolver con los datos correctos para una URL válida', async () => {
    const data = await fetchData('https://api.example.com/data');
    assert.strictEqual(data.data, 'Hola desde la API');
  });

  it('debe rechazar la promesa con un error para una URL inválida', async () => {
    try {
      await fetchData('https://api.example.com/invalid');
      assert.fail('Debería haber lanzado un error');
    } catch (error) {
      assert.strictEqual(error.message, 'URL no válida');
    }
  });
});
