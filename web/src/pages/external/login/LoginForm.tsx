import { Button, Form, FormGroup } from "reactstrap";
import { Control, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputPassword, InputText } from "../../../shared/forms/inputs";
import { Navigate } from "react-router-dom";
import { useAlertDialogs, useAuth } from "../../../hooks";
import axios from "axios";

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(50).required(),
  })
  .required();

export default function LoginForm(): JSX.Element {
  const { handleSubmit, control: rawControl } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { showErrorDialog } = useAlertDialogs();

  const { login, user } = useAuth();

  const control = rawControl as unknown as Control;

  async function onSubmit({ email, password }: IFormInputs) {
    try {
      await login(email, password);
    } catch (error) {
      const throwStandardError = (message: string) =>
        showErrorDialog({
          title: "Error logging in",
          description: message,
        });

      if (axios.isAxiosError(error)) {
        const responseStatusCode = error.response?.status;

        switch (responseStatusCode) {
          case 401:
            showErrorDialog({
              title: "Error logging in",
              description: "Incorrect username or password",
            });
            break;
          case 422:
            showErrorDialog({
              title: "Error logging in",
              description: "Incorrect parameters",
            });
            break;
          default:
            throwStandardError(error.message);
            break;
        }
      } else {
        throwStandardError("Processing error");
      }
    }
  }

  if (user) {
    return <Navigate to="/backoffice" />;
  }

  return (
    <Form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <InputText
          id="email"
          control={control}
          label="Email"
          placeholder="Email"
          required
        />
        <InputPassword
          id="password"
          control={control}
          label="Password"
          placeholder="Password"
          required
        />
      </FormGroup>
      <FormGroup>
        <Button className="w-100 br-7" color="primary" type="submit">
          Log In
        </Button>
      </FormGroup>
    </Form>
  );
}
