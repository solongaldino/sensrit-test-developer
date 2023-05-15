import { Router } from 'express';
import { container } from 'tsyringe';
import { UserSchema } from '../schemes';
import { RegisterController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const registerController = container.resolve(RegisterController);
router.post(
  '/register',
  joiValidateSchema(UserSchema.register),
  registerController.handle.bind(registerController),
);

export { router as Routes };
