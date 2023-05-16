import { ICustomerRepository } from '@shared/repositories/prisma';
import { ApiError } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  ICreateCustomerUseCase,
  ICreateCustomerUseCaseDTO,
  ICreateCustomerUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class CreateCustomerUseCase implements ICreateCustomerUseCase {
  constructor(
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
  ) {}

  async run({
    name,
    email,
  }: ICreateCustomerUseCaseDTO): Promise<ICreateCustomerUseCaseResponseDTO> {
    const foundCustomerByEmail = await this.customerRepository.findByEmail(email);
    if (foundCustomerByEmail) throw new ApiError(400, 'Email in use');

    await this.customerRepository.create({
      data: {
        name,
        email,
        createdAt: new Date(),
      },
    });
  }
}
