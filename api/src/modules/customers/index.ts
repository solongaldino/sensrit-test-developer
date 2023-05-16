import { Router } from 'express';
import { Routes } from './infra/http/routes';

const router = Router();

router.use('/customers', Routes);

export { router as CustomersRoutes };
