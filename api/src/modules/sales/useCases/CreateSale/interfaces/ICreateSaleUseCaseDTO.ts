export default interface ICreateSaleUseCaseDTO {
  customerId: number;
  loggedUserId: number;
  list: { productId: number; amount: number }[];
}
