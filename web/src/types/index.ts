export interface TaxeInterface {
  id: number;
  name: string;
  percentage: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductTypeInterface {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInterface {
  id: number;
  name: string;
  value: number;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  productType?: Partial<ProductTypeInterface>;
  taxes?: TaxeInterface[];
}

export interface SaleInterface {
  id: number;
  name: string;
  percentage: string;
  createdAt: Date;
  updatedAt: Date;
}
