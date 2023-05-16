import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { CreateCustomerController, ListAllCustomersController } from '../controllers';
import { authHandleMiddleware, joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const createCustomerController = container.resolve(CreateCustomerController);
router.post(
  '/',
  joiValidateSchema(Schema.createCustomer),
  authHandleMiddleware,
  createCustomerController.handle.bind(createCustomerController),
);

const listAllCustomersController = container.resolve(ListAllCustomersController);
router.get(
  '/list-all',
  authHandleMiddleware,
  listAllCustomersController.handle.bind(listAllCustomersController),
);

export { router as Routes };
