import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthSchema } from '../schemes';
import { LoginController, RefreshTokenController } from '../controllers';
import { joiValidateSchema } from '@shared/infra/http/middlewares';

const router = Router();

const loginController = container.resolve(LoginController);
router.post(
  '/login',
  joiValidateSchema(AuthSchema.login),
  loginController.handle.bind(loginController),
);

const refreshTokenController = container.resolve(RefreshTokenController);
router.post(
  '/refresh-token',
  joiValidateSchema(AuthSchema.refreshToken),
  refreshTokenController.handle.bind(refreshTokenController),
);

export { router as Routes };
