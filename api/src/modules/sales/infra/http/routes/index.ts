import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { CreateSaleController } from '../controllers';
import { authHandleMiddleware, joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const createSaleController = container.resolve(CreateSaleController);
router.post(
  '/',
  joiValidateSchema(Schema.createSale),
  authHandleMiddleware,
  createSaleController.handle.bind(createSaleController),
);

export { router as Routes };
