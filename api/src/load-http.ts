console.info('[START] - Load modules HTTP\r\n');
import express from 'express';
import cors from 'cors';
import { AuthRoutes } from '@modules/auth';
import { CustomersRoutes } from '@modules/customers';
import { ProductsRoutes } from '@modules/products';
import { SalesRoutes } from '@modules/sales';
import { UsersRoutes } from '@modules/users';
import { PagesRoutes } from '@shared/infra/http/pages';
import { EnvVariables, Logger } from '@shared/utils';
import { errorHandlerMiddleware, morganMiddleware } from '@shared/infra/http/middlewares';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(morganMiddleware);

app.use('/', AuthRoutes);
console.info('AuthRoutes');

app.use('/', CustomersRoutes);
console.info('CustomersRoutes');

app.use('/', ProductsRoutes);
console.info('ProductsRoutes');

app.use('/', SalesRoutes);
console.info('SalesRoutes');

app.use('/', UsersRoutes);
console.info('UsersRoutes');

app.use('/', PagesRoutes);
console.info('PagesRoutes');

app.use(errorHandlerMiddleware);

console.info('\r\n[END] - Load modules HTTP\r\n');

const serverPort = EnvVariables.get_SERVER_PORT();

app.listen(serverPort, () => Logger.info(`Server is running on PORT ${serverPort}`));
