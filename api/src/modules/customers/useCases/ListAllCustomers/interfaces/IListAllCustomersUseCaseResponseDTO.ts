import { Customer } from '@shared/repositories/prisma';

type IListAllCustomersUseCaseResponseDTO = {
  id: Customer['id'];
  name: Customer['name'];
  email: Customer['email'];
  createdAt: Customer['createdAt'];
}[];

export default IListAllCustomersUseCaseResponseDTO;
