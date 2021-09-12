import { getRepository, Repository } from 'typeorm';
import { Router } from "express";
import { Purchase } from '../entity/Purchase';
import { User } from '../entity/User';

const purchasesRoutes = Router();

purchasesRoutes.get('/:username', async (request, response) => {
  const purchases = getRepository(Purchase) 
  const users = getRepository(User);

  try {
    const { username } = request.params;

    const user = await users.findOne(username)
    const userPurchases = await purchases.find({ user })
    
    if(userPurchases.length === 0){
      return response.status(400).json({message: 'O usuário ainda não efetuou compras.'})
    }

    return response.status(201).send(userPurchases);
  } catch (err) {
    return response.status(400).json({ message: 'Usuário não cadastrado.' })
  }
});

purchasesRoutes.post('/', async (request, response) => {
  const purchases = getRepository(Purchase) 
  const users = getRepository(User);

  try {
    const { username, total } =  request.body 
  
    const user = await users.findOne(username)

    const purchase: Purchase = {
      user,
      total,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await purchases.save(purchase);
    
    return response.status(201).json({ message: "Usuário criado com sucesso!"});

  } catch (err) {
    return response.status(400).json({ error: "O nome do usuário já existe!" });
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