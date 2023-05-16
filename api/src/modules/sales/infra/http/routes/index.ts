import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { CreateSaleController, SendSaleToCustomerController } from '../controllers';
import { authHandleMiddleware, joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const createSaleController = container.resolve(CreateSaleController);
router.post(
  '/',
  joiValidateSchema(Schema.createSale),
  authHandleMiddleware,
  createSaleController.handle.bind(createSaleController),
);

const sendSaleToCustomerController = container.resolve(SendSaleToCustomerController);
router.post(
  '/send-to-customer',
  joiValidateSchema(Schema.sendSaleToCustomer),
  authHandleMiddleware,
  sendSaleToCustomerController.handle.bind(sendSaleToCustomerController),
);

export { router as Routes };
