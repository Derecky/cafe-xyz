import { getRepository, Repository } from 'typeorm';
import { Router } from "express";
import { User } from '../database/entity/User';

const userRoutes = Router();


userRoutes.get('/', async (request, response) => {
  const users = getRepository(User) 
  const allUsers = await users.find();
  return response.status(201).send(allUsers)
});

userRoutes.get('/:id', async (request, response) => {
  const users = getRepository(User) 
  try {
    const { id } = request.params;

    const user = await users.findOne(id);
    
    if(!user) {
      throw Error()
    }
  
    return response.status(201).send(user);
  } catch (err) {
    return response.status(400).json({ message: 'Usuário não encontrado.' })
  }
});

userRoutes.post('/', async (request, response) => {
  const users = getRepository(User) 
  try {
    const { username, password, name } =  request.body 
  
    const user: User = {
      username,
      password,
      name,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const alreadyExistsUser = await users.findOne({ username })
    console.log(alreadyExistsUser)

    if(!!alreadyExistsUser){
      throw Error();
    }

    await users.save(user);
    
    return response.status(201).json({ message: "Usuário criado com sucesso!"});

  } catch (err) {
    return response.status(400).json({ error: "O nome do usuário já existe!" });
  }


});

userRoutes.delete('/:username', async (request, response) => {
  const users = getRepository(User);
  const { username } =  request.params; 
    
  try {
    
    const user = await users.findOne({ username });
    
    if(!user){
      return response.status(400).json({ message: "Usuário não tem cadastro."})
    }

    await users.delete(user);

    return response.status(201).json({ message: "O usuário foi deletado."})
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
  
})


export { userRoutes };