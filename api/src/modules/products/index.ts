import { Router } from 'express';
import { Routes } from './infra/http/routes';

const router = Router();

router.use('/products', Routes);

export { router as ProductsRoutes };
