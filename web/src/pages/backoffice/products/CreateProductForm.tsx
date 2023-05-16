import { Button, Form, FormGroup } from "reactstrap";
import { useAlertDialogs } from "../../../hooks";
import { InputNumber, InputText, Select } from "../../../shared/forms/inputs";
import { Control, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateProduct } from "../../../hooks/http/api/mutations";
import { useListAllProductsType } from "../../../hooks/http/api/queries";

interface IFormInputs {
  productTypeId: number;
  name: string;
  value: number;
  description: string;
}

const schema = yup
  .object({
    productTypeId: yup.number().required("Tipo de produto e obrigatório"),
    name: yup.string().required("Nome do produto e obrigatório"),
    value: yup.number().required("Valor do produto e obrigatório"),
    description: yup.string(),
  })
  .required();

export default function CreateProductForm() {
  const { showSuccessDialog } = useAlertDialogs();

  const {
    data: productsType,
    isError,
    isSuccess,
    isLoading,
  } = useListAllProductsType();

  const defaultValues: IFormInputs = {
    productTypeId: 0,
    name: "",
    value: 0,
    description: "",
  };

  const {
    handleSubmit,
    control: rawControl,
    setValue,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues,
  });
  const control = rawControl as unknown as Control;

  const { mutate } = useCreateProduct({
    onSuccess: () =>
      showSuccessDialog({
        title: "Produto criado com sucesso!",
        description: "",
      }),
  });

  function onSubmit({ productTypeId, name, value, description }: IFormInputs) {
    mutate({
      productTypeId,
      name,
      value,
      description,
    });
  }

  if (isLoading) {
    return <></>;
  } else if (isError) {
    return <></>;
  } else if (isSuccess && productsType) {
    const options = productsType.map((item) => {
      return {
        label: item.name,
        value: item.id,
      };
    });
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Select
            id="productTypeId"
            control={control}
            setValue={setValue}
            options={options}
            label="Tipo do Produto"
            required
            placeholder="Selecione o Tipo do Produto"
          />
          <InputText
            id="name"
            control={control}
            label="Nome do Produto"
            placeholder="Nome do Produto"
          />
          <InputNumber
            id="value"
            control={control}
            label="Valor do Produto"
            placeholder="Valor do Produto"
          />
          <InputText
            id="description"
            control={control}
            label="Descrição do Produto"
            placeholder="Descrição do Produto"
          />
        </FormGroup>
        <div className="form-group text-center">
          <Button className="w-100" color="primary" type="submit">
            Send
          </Button>
        </div>
      </Form>
    );
  } else {
    return <></>;
  }
}
