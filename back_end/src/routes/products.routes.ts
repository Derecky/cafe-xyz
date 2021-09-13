import { getRepository } from 'typeorm';
import { Router } from "express";
import { Product } from '../database/entity/Product';

const productsRoutes = Router();

productsRoutes.get('/', async (request, response) => {
  const products = getRepository(Product);
  const allProducts = await products.find();

  if(allProducts.length === 0){
    return response.status(400).json({ message: "Não tem produtos cadastrados "});
  }

  return response.status(201).send(allProducts);
});

productsRoutes.get('/:name', async (request, response) => {
  const products = getRepository(Product);
  try {
    const { name } = request.params;

    const product = await products.findOne(name);
    
    if(!product) {
      throw Error();
    }
  
    return response.status(201).send(product);
  } catch (err) {
    return response.status(400).json({ message: 'Produto não encontrado.' });
  }
});

productsRoutes.post('/', async (request, response) => {
  const products = getRepository(Product);

  try {
    const { value, image, name, type } = request.body;
  
    const product: Product = {
      name,
      image,
      value,
      type,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const alreadyExistsProduct = await products.findOne({ name });
    console.log(alreadyExistsProduct);

    if(!!alreadyExistsProduct){
      throw Error();
    }

    await products.save(product);
    
    return response.status(201).json({ message: "Produto criado com sucesso!"});

  } catch (err) {
    return response.status(400).json({ error: "O nome do produto já existe!" });
  }

});

productsRoutes.delete('/:name', async (request, response) => {
  const products = getRepository(Product);
  const { name } =  request.params; 
    
  try {
    
    const product = await products.findOne({ name });
    console.log(product);

    await products.delete(product);

    return response.status(201).json({ message: "O produto foi deletado."});
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  
})


export { productsRoutes };