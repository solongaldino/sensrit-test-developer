import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { CreateProductController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const createProductController = container.resolve(CreateProductController);
router.post(
  '/',
  joiValidateSchema(Schema.createProduct),
  createProductController.handle.bind(createProductController),
);

export { router as Routes };
