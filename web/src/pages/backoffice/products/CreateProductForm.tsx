import { Button, Form, FormGroup } from "reactstrap";
import { useAlertDialogs } from "../../../hooks";
import { InputNumber, InputText } from "../../../shared/forms/inputs";
import { Control, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateProduct } from "../../../hooks/http/api/mutations";

interface IFormInputs {
  name: string;
  value: number;
  description: string;
}

const schema = yup
  .object({
    name: yup.string().required("Nome do produto e obrigatório"),
    value: yup.number().required("Valor do produto e obrigatório"),
    description: yup.string(),
  })
  .required();

export default function CreateProductForm() {
  const { showSuccessDialog } = useAlertDialogs();

  const defaultValues: IFormInputs = {
    name: "",
    value: 0,
    description: "",
  };

  const {
    handleSubmit,
    control: rawControl,
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues,
  });
  const control = rawControl as unknown as Control;

  const { mutate } = useCreateProduct({
    onSuccess: () => {
      showSuccessDialog({
        title: "Produto criado com sucesso!",
        description: "",
      });
      reset();
    },
  });

  function onSubmit({ name, value, description }: IFormInputs) {
    mutate({
      name,
      value,
      description,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
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
          Enviar
        </Button>
      </div>
    </Form>
  );
}
