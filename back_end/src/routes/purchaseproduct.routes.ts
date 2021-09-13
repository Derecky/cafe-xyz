import { Router } from "express";
import { getRepository } from "typeorm";

import { Product } from "../database/entity/Product";

const productsRoutes = Router();

productsRoutes.get('/', async (request, response) => {
  const products = getRepository(Product);
  const allProducts = await products.find();

  if(allProducts.length === 0){
    return response.status(400).json({ message: "Não tem produtos cadastrados "});
  }

  return response.status(201).send(allProducts);
});