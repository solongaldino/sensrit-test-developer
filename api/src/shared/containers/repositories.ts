import { container } from 'tsyringe';
import * as Repositories from '@shared/repositories/prisma/implementations';

for (const [key, value] of Object.entries(Repositories)) {
  console.log(key);
  container.registerSingleton<unknown>(key, value);
}
