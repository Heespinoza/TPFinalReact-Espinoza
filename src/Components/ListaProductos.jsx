const productos = [
    {
      id: '1',
      nombre: 'Tarjeta gráfica',
      descripcion: 'Potente tarjeta gráfica para juegos',
      precio: 249.99,
      stock: 5,
      tipo: 'Graficas',
      marca: 'Nvidia'
    },
    {
      id: '2',
      nombre: 'Disco duro SSD',
      descripcion: 'Almacenamiento de alta velocidad',
      precio: 99.99,
      stock: 10,
      tipo: 'Almacenamiento',
      marca: 'Samsung'
    },
    {
      id: '3',
      nombre: 'Memoria RAM',
      descripcion: '8GB de memoria RAM DDR4',
      precio: 79.99,
      stock: 8,
      tipo: 'Memorias',
      marca: 'Corsair'
    },
    {
      id: '4',
      nombre: 'Monitor',
      descripcion: 'Pantalla de 24 pulgadas Full HD',
      precio: 199.99,
      stock: 3,
      tipo: 'Periférico',
      marca: 'Dell'
    },
    {
      id: '5',
      nombre: 'Teclado mecánico',
      descripcion: 'Teclado con interruptores mecánicos',
      precio: 89.99,
      stock: 6,
      tipo: 'Periférico',
      marca: 'Razer'
    },
    {
      id: '6',
      nombre: 'Mouse gaming',
      descripcin: 'Mouse con sensor óptico de alta precisión',
      precio: 59.9,
      stock: 7,
      tipo: 'Periférico',
      marca: 'Logitech'
    },
    {
      id: '7',
      nombre: 'Fuente de alimentación',
      descripcion: 'Fuente de 750W certificada 80 Plus Gold',
      precio: 129.99,
      stock: 2,
      tipo: 'Componente',
      marca: 'EVGA'
    },
    {
      id: '8',
      nombre: 'Placa base',
      descripcion: 'Placa base compatible con procesadores Intel',
      precio: 159.99,
      stock: 4,
      tipo: 'Mother',
      marca: 'Asus'
    },
    {
      id: '9',
      nombre: 'Procesador',
    descripcion: 'Procesador de 6 núcleos y 12 hilos',
      precio: 299.99,
      stock: 5,
      tipo: 'Procesadores',
      marca: 'Intel'
    },
    {
      id: '10',
      nombre: 'Ventilador de CPU',
      descripcion: 'Ventilador de alto rendimiento para refrigeración',
      precio: 49.99,
      stock: 9,
      tipo: 'Componente',
      marca: 'Cooler Master'
    }
  ]
  export const getproducts=()=>{
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve (productos)
        },500)
    })
  }
  export const getproductById = (productosId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(productos.find(prod => prod.id === productosId))
        }, 500)
    })
  }
  
