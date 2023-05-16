import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthSchema } from '../schemes';
import { LoginController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const loginController = container.resolve(LoginController);
router.post(
  '/login',
  joiValidateSchema(AuthSchema.login),
  loginController.handle.bind(loginController),
);

export { router as Routes };
