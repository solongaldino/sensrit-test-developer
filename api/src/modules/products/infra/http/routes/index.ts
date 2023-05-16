import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { CreateProductController, ListAllProductsController } from '../controllers';
import { authHandleMiddleware, joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const createProductController = container.resolve(CreateProductController);
router.post(
  '/',
  joiValidateSchema(Schema.createProduct),
  authHandleMiddleware,
  createProductController.handle.bind(createProductController),
);

const listAllProductsController = container.resolve(ListAllProductsController);
router.get(
  '/list-all',
  authHandleMiddleware,
  listAllProductsController.handle.bind(listAllProductsController),
);

export { router as Routes };
