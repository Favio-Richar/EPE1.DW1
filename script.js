// Filtro de productos
const productos = [
    { nombre: 'Manzana', categoria: 'frutas' },
    { nombre: 'Pera', categoria: 'frutas' },
    { nombre: 'Plátano', categoria: 'frutas' },
    { nombre: 'Naranja', categoria: 'frutas' },
    { nombre: 'Sandía', categoria: 'frutas' },
    { nombre: 'Piña', categoria: 'frutas' },
    { nombre: 'Uva', categoria: 'frutas' },
    { nombre: 'Limón', categoria: 'frutas' },
    { nombre: 'Fresa', categoria: 'frutas' },
    { nombre: 'Cereza', categoria: 'frutas' },
    { nombre: 'Zanahoria', categoria: 'verduras' },
    { nombre: 'Lechuga', categoria: 'verduras' },
    { nombre: 'Tomate', categoria: 'verduras' },
    { nombre: 'Papa', categoria: 'verduras' },
    { nombre: 'Brócoli', categoria: 'verduras' },
    { nombre: 'Espinaca', categoria: 'verduras' },
    { nombre: 'Cebolla', categoria: 'verduras' },
    { nombre: 'Ajo', categoria: 'verduras' },
    { nombre: 'Pimiento', categoria: 'verduras' },
    { nombre: 'Calabaza', categoria: 'verduras' }
  ];
  
  function filtrarProductos() {
    const filtroCategoria = document.getElementById('filtro').value.toLowerCase();
    const filtroNombre = document.getElementById('filtroNombre').value.trim().toLowerCase();
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';
  
    productos.forEach(producto => {
      const nombre = producto.nombre.toLowerCase();
      const categoria = producto.categoria.toLowerCase();
  
      if ((filtroNombre === '' || nombre.includes(filtroNombre)) && (filtroCategoria === '' || categoria === filtroCategoria || filtroCategoria === 'todos')) {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - ${producto.categoria}`;
        listaProductos.appendChild(li);
      }
    });
  }
  
  // Formulario de contacto
  function guardarDatos(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const comuna = document.getElementById('comuna').value;
    const datos = { nombre, email, direccion, comuna };
    alert(`Datos guardados: ${JSON.stringify(datos)}`);
  }
  