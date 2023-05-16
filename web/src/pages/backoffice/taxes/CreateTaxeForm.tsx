import { Button, Form, FormGroup } from "reactstrap";
import { useAlertDialogs } from "../../../hooks";
import { InputNumber, InputText } from "../../../shared/forms/inputs";
import { Control, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateTaxe } from "../../../hooks/http/api/mutations";

interface IFormInputs {
  name: string;
  percentage: number;
}

const schema = yup
  .object({
    name: yup.string().required("Nome e obrigatorio"),
    percentage: yup.number().required("Porcentagem e obrigatorio"),
  })
  .required();

export default function CreateTaxeForm() {
  const { showSuccessDialog } = useAlertDialogs();

  const defaultValues: IFormInputs = {
    name: "",
    percentage: 0,
  };

  const { handleSubmit, control: rawControl } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues,
  });
  const control = rawControl as unknown as Control;

  const { mutate } = useCreateTaxe({
    onSuccess: () =>
      showSuccessDialog({
        title: "Imposto criado com sucesso!",
        description: "",
      }),
  });

  function onSubmit({ name, percentage }: IFormInputs) {
    mutate({
      name,
      percentage,
    });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <InputText
          id="name"
          control={control}
          label="Nome do Imposto"
          placeholder="Nome do Imposto"
        />
        <InputNumber
          id="percentage"
          control={control}
          label="Porcentagem do imposto"
          placeholder="Porcentagem do Imposto"
        />
      </FormGroup>
      <div className="form-group text-center">
        <Button className="w-100" color="primary" type="submit">
          Send
        </Button>
      </div>
    </Form>
  );
}
