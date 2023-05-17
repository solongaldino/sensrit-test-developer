import { Button, Form, FormGroup } from "reactstrap";
import { useAlertDialogs } from "../../../hooks";
import { InputText } from "../../../shared/forms/inputs";
import { Control, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateCustomer } from "../../../hooks/http/api/mutations";

interface IFormInputs {
  name: string;
  email: string;
}

const schema = yup
  .object({
    name: yup.string().required("Nome e obrigatorio"),
    email: yup.string().email().required("Email e obrigatorio"),
  })
  .required();

export default function CreateCustomerForm() {
  const { showSuccessDialog } = useAlertDialogs();

  const defaultValues: IFormInputs = {
    name: "",
    email: "",
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

  const { mutate } = useCreateCustomer({
    onSuccess: () => {
      showSuccessDialog({
        title: "Cliente criado com sucesso!",
        description: "",
      });
      reset();
    },
  });

  function onSubmit({ name, email }: IFormInputs) {
    mutate({
      name,
      email,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <InputText id="name" control={control} label="Nome" />
        <InputText id="email" control={control} label="Email" />
      </FormGroup>
      <div className="form-group text-center">
        <Button className="w-100" color="primary" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
}
