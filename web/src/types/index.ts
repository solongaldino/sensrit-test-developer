export interface CustomerInterface {
  id: number;
  name: string;
  email: string;
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
}

export interface SaleInterface {
  id: number;
  name: string;
  percentage: string;
  createdAt: Date;
  updatedAt: Date;
}
