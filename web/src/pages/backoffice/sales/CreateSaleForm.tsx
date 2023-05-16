import { Button, Form, FormGroup } from "reactstrap";

import { InputNumber, Select } from "../../../shared/forms/inputs";
import { Control, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useListAllProducts } from "../../../hooks/http/api/queries";
import { ProductInterface } from "../../../types";
interface IFormInputs {
  productId: number;
  amount: number;
}

const schema = yup
  .object({
    productId: yup.number().required("Produto e obrigatório"),
    amount: yup.number().required("Quantidade e obrigatório"),
  })
  .required();

interface IParams {
  addProduct: (productId: ProductInterface, amount: number) => void;
}

export default function CreateSaleForm({ addProduct }: IParams) {
  const {
    data: products,
    isError,
    isSuccess,
    isLoading,
  } = useListAllProducts();

  const {
    handleSubmit,
    control: rawControl,
    setValue,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const control = rawControl as unknown as Control;

  function onSubmit({ productId, amount }: IFormInputs) {
    const product = products?.filter((item) => item.id === productId);
    product && addProduct(product[0], amount);
  }

  if (isLoading) {
    return <></>;
  } else if (isError) {
    return <></>;
  } else if (isSuccess && products) {
    const options = products.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });

    return (
      <>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Select
              id="productId"
              control={control}
              label="Produto"
              placeholder="Selecione"
              setValue={setValue}
              options={options}
            />
            <InputNumber
              id="amount"
              control={control}
              label="Quantidade"
              placeholder="Quantidade"
            />
          </FormGroup>
          <div className="form-group text-center">
            <Button className="w-100" color="primary" type="submit">
              Adicionar
            </Button>
          </div>
        </Form>
      </>
    );
  } else {
    return <></>;
  }
}
