import { Router } from 'express';

import { userRoutes } from './user.routes';
import { productsRoutes } from './products.routes';

const router = Router();

router.use("/users", userRoutes);
router.use("/products", productsRoutes);

export { router };