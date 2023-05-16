import { Customer } from '@shared/repositories/prisma';

export default interface ICreateCustomerUseCaseDTO {
  name: Customer['name'];
  email: Customer['email'];
}
