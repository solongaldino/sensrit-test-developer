import { container } from 'tsyringe';

import * as UseCases from '../useCases/export-implementations';

for (const [key, value] of Object.entries(UseCases)) {
  console.log(key);
  container.registerSingleton<unknown>(key, value);
}
