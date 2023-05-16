import {
  ICustomerRepository,
  IItemRepository,
  IProductRepository,
  ISaleRepository,
  IUserRepository,
  prisma,
  SaleStatus,
} from '@shared/repositories/prisma';
import { ApiError } from '@shared/utils';
import { inject, injectable } from 'tsyringe';
import {
  ICreateSaleUseCase,
  ICreateSaleUseCaseDTO,
  ICreateSaleUseCaseResponseDTO,
} from '../interfaces';

@injectable()
export default class CreateSaleUseCase implements ICreateSaleUseCase {
  constructor(
    @inject('ItemRepository')
    private itemRepository: IItemRepository,
    @inject('SaleRepository')
    private saleRepository: ISaleRepository,
    @inject('CustomerRepository')
    private customerRepository: ICustomerRepository,
    @inject('ProductRepository')
    private productRepository: IProductRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async run({
    list,
    customerId,
    loggedUserId,
  }: ICreateSaleUseCaseDTO): Promise<ICreateSaleUseCaseResponseDTO> {
    const user = await this.userRepository.findById(loggedUserId);
    if (!user) throw new ApiError(404, 'User not found');

    const customer = await this.customerRepository.findById(customerId);
    if (!customer) throw new ApiError(404, 'Customer not found');

    await prisma.$transaction(async (conn) => {
      let amountSale = 0;

      const sale = await this.saleRepository.create(
        {
          data: {
            customerId,
            userId: loggedUserId,
            amount: amountSale,
            status: SaleStatus.open,
            createdAt: new Date(),
          },
        },
        conn,
      );

      for (const item of list) {
        const product = await this.productRepository.findById(item.productId);
        if (!product) throw new ApiError(404, `Product with id: ${item.productId} not found`);

        amountSale += Number(product.value) * item.amount;

        await this.itemRepository.create({
          data: {
            amount: item.amount,
            value: product.value,
            saleId: sale.id,
            productId: product.id,
          },
        });
      }

      await this.saleRepository.update({
        where: {
          id: sale.id,
        },
        data: {
          amount: amountSale,
        },
      });
    });
  }
}
