import { Router } from 'express';
import { Routes } from './infra/http/routes';

const router = Router();

router.use('/auth', Routes);

export { router as AuthRoutes };
