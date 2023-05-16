import { Router } from 'express';
import { container } from 'tsyringe';
import { UserSchema } from '../schemes';
import { CreateUserController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const createUserController = container.resolve(CreateUserController);
router.post(
  '/',
  joiValidateSchema(UserSchema.register),
  createUserController.handle.bind(createUserController),
);

export { router as Routes };
