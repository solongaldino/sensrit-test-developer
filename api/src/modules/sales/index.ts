import { Router } from 'express';
import { Routes } from './infra/http/routes';

const router = Router();

router.use('/sales', Routes);

export { router as SalesRoutes };
