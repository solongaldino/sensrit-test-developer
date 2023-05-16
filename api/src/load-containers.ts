console.info('\r\n[START] - Load container DI\r\n');
import 'reflect-metadata';
import '@shared/containers';
import '@modules/auth/containers';
import '@modules/customers/containers';
import '@modules/products/containers';
import '@modules/sales/containers';
import '@modules/users/containers';
console.info('\r\n[END] - Load container DI\r\n');
