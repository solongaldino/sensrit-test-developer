import { Router } from 'express';
import { Routes } from './infra/http/routes';

const router = Router();

router.use('/users', Routes);

export { router as UsersRoutes };
