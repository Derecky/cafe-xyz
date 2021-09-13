import { getRepository, Repository } from 'typeorm';
import { Request, Router } from "express";
import { Purchase } from '../database/entity/Purchase';
import { User } from '../database/entity/User';
import { Product } from '../database/entity/Product';
import { PurchaseProduct } from '../database/entity/PurchaseProduct';

type ProductAmountData = {
  productName: string,
  amount: number,
  observation?: string
}


const purchasesRoutes = Router();

purchasesRoutes.get('/:username', async (request, response) => {
  const purchases = getRepository(Purchase) 
  const users = getRepository(User);
  const purchaseProductRepository = getRepository(PurchaseProduct);

  try {
    const { username } = request.params;

    const user = await users.findOne(username)
    const userPurchases = await purchases.find({ user })
    
    if(userPurchases.length === 0){
      return response.status(400).json({message: 'O usuário ainda não efetuou compras.'})
    }

    const listProductsPerPurchase: Array<PurchaseProduct[]> = []; 

    userPurchases.forEach(async (purchase) => {
      let aux = await purchaseProductRepository.find({purchase})
      
      listProductsPerPurchase.push(aux);
    });


    return response.status(201).send(listProductsPerPurchase);
  } catch (err) {
    return response.status(400).json({ message: 'Usuário não cadastrado.' })
  }
});

purchasesRoutes.post('/', async (request, response) => {


  try {
    const users = getRepository(User);
    const purchases = getRepository(Purchase) 
    const purchaseProductRepository = getRepository(PurchaseProduct);
    const productsRepository = getRepository(Product);

    /*  Recebe nome do usuario logado, 
        Valor total da compra
        Vetor com { Produto, Quantidade e observação }    
    */
    const { 
      username, 
      total, 
      dataProducts, 
    } =  request.body 
  
    /* Procura usuário no banco  */
    const user = await users.findOne(username);

    const purchase: Purchase = {
      user,
      total,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    /* Cria a compra vinculando usuário */
    const savedPurchase = await purchases.save(purchase);

    /* Precisa de outro try - catch */
    dataProducts.forEach(async ({
      productName, 
      amount, 
      observation
    }: ProductAmountData) => {
      const product = await productsRepository.findOne(productName)
      
      const newPurchaseProduct = {
        purchase: savedPurchase,
        product,
        amount,
        observation
      };

      await purchaseProductRepository.save(newPurchaseProduct);
    
    });


    return response.status(201).json({ message: "Obrigado pela Compra!"});

  } catch (err) {
    return response.status(400).json({ error: "Pedimos perdão, a compra não pôde ser efetuada." });
  }


});

/* 
  Só faz sentido para caso estorne.
*/
purchasesRoutes.delete('/:username', async (request, response) => {
  const purchases = getRepository(Purchase);
  const { username } =  request.params; 
    
  try {
    
    const purchase = await purchases.findOne({});
    
    if(!purchase){
      return response.status(400).json({ message: "Usuário não tem cadastro."})
    }

    await purchases.delete(purchase);

    return response.status(201).json({ message: "O usuário foi deletado."})
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
  
})


export { purchasesRoutes };