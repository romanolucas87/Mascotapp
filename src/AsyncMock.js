const productsPets = [
    { id: 1, 
      pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_7LgJTvk4V_MrST7q6ML-0egMJb0P7bTAg&usqp=CAU",
      title:"Correa para perro", description:"Loren Ipsum", price:1500, category:1},
    { id: 2, 
      pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5fx1A17xjDoD1h3F8lzy8mDCWQ55KiQoqnCoe7HnR1gP1MBJxL_476DGTb_QYUwN0ug&usqp=CAU",
      title:"Cama para perro", description:"Loren Ipsum", price:3700 , category:1},
    { id: 3, 
      pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpGq2ArnMvUUisUjhQQJ7zQYfQs0g5fd3xyQ&usqp=CAU",
      title:"Rascador para gato", description:"Loren Ipsum", price:5000 , category:2},
    { id: 4, 
      pictureUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BaYwRxTcdkKEg5NxNVXciU926XczYO6icA9QIoxD3oZTx13e0otymeWSTQ0ZAYwOGdw&usqp=CAU",
      title:"Dispenser de Comida para Perros", description:"Loren Ipsum", price:10000, category:1},
    { id: 5, 
      pictureUrl:"https://www.lacoopeencasa.coop/media/lcec/publico/articulos/3/6/8/36817fea2aadbc00927669cddac4fa74",
      title:"Comida para Gato CatChow MultiProteina", description:"Loren Ipsum", price:10000, category:2},
    { id: 6, 
      pictureUrl:"https://m.media-amazon.com/images/I/71n9V9ERYDL._AC_SX466_.jpg",
      title:"Dispenser de Comida para gatos", description:"Loren Ipsum", price:660, category:2},
    { id: 7, 
      pictureUrl:"https://www.mexicanpet.com/media/catalog/product/cache/0b0e31a4228487a7e7cc1a8c24afd5ca/a/l/alimento_forti-diet_prohealth_periquito_australiano_by_kaytee.jpg",
      title:"Comida de Pajarito", description:"Loren Ipsum", price:770, category:3},
    { id: 8, 
      pictureUrl:"https://www.acuarioacuaworld.com/1753-large_default/pecera-completa-96l.jpg",
      title:"Pecera Completa", description:"Loren Ipsum", price:880, category:3},  
    { id: 9, 
      pictureUrl:"https://tiendademascotasar.vtexassets.com/arquivos/ids/158261-800-auto?v=637780516513070000&width=800&height=auto&aspect=true",
      title:"Comida de Tortuga", description:"Loren Ipsum", price:990, category:3},
    { id: 10, 
      pictureUrl:"https://tiendademascotasar.vtexassets.com/arquivos/ids/160348-800-auto?v=638203735036130000&width=800&height=auto&aspect=true",
      title:"Jaula Conejo", description:"Loren Ipsum", price:1010, category:3},    
          
  ];

  export const getProducts = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve(productsPets)
        }, 2000)
    })
  }
  export const getProduct =(productId)=>{
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        const newProduct = productsPets.find(product => product.id == productId);
        newProduct ? resolve(newProduct): reject("No se encontró un PRODUCTO con ese ID");
      },2000);
    })
  }