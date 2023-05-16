import { Router } from 'express';
import { container } from 'tsyringe';
import { Schema } from '../schemes';
import { CreateCustomerController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const createCustomerController = container.resolve(CreateCustomerController);
router.post(
  '/',
  joiValidateSchema(Schema.createCustomer),
  createCustomerController.handle.bind(createCustomerController),
);

export { router as Routes };
