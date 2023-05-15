import { container } from 'tsyringe';
import {
  CancelAccountUseCase,
  ICancelAccountUseCase,
  ConfirmationRegisterUseCase,
  IConfirmationRegisterUseCase,
  RegisterUseCase,
  IRegisterUseCase,
  UpdatePasswordUseCase,
  IUpdatePasswordUseCase,
} from '@modules/users/useCases';

container.registerSingleton<ICancelAccountUseCase>('CancelAccountUseCase', CancelAccountUseCase);
container.registerSingleton<IConfirmationRegisterUseCase>(
  'ConfirmationRegisterUseCase',
  ConfirmationRegisterUseCase,
);
container.registerSingleton<IRegisterUseCase>('RegisterUseCase', RegisterUseCase);
container.registerSingleton<IUpdatePasswordUseCase>('UpdatePasswordUseCase', UpdatePasswordUseCase);
