import { Router } from 'express';
import notFound from './404';
import status from './status';

const router = Router();

router.use('/', status);
router.use('/', notFound);

export { router as PagesRoutes };
