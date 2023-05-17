import { Control, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputCheckBox, InputText } from "../../../shared/forms/inputs";
import { useRegisterUser } from "../../../hooks/http/api/mutations";
import { useAlertDialogs } from "../../../hooks";
import { capitalizeFirstLetter } from "../../../utils";
import TermsAndConditions from "../../../shared/forms/other/TermsAndConditions";
import InputPassword from "../../../shared/forms/inputs/InputPassword";
import useLoader from "../../../hooks/useLoader";
import { Button, Form, FormGroup } from "reactstrap";

interface IFormInputs {
  name: string;
  email: string;
  password: string;
}

const schema = yup
  .object({
    name: yup.string().required("please enter your name"),
    email: yup.string().email().required("please provide a valid e-mail"),
    password: yup
      .string()
      .min(8, "minimum of 8 characters")
      .max(50, "maximum of 50 characters")
      .matches(/\d/, "required at least one number")
      .matches(/[a-z]/, "required at least one upper case letter")
      .matches(/[A-Z]/, "required at least one lower case letter")
      .required("password is required"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required("please confirm your password"),
    accept: yup
      .boolean()
      .oneOf([true], "you must accept our Terms & Condition")
      .required("you must accept our Terms & Condition"),
  })
  .required();

export default function RegisterForm(): JSX.Element {
  const { showLoader, hideLoader } = useLoader();
  const { showSuccessDialog } = useAlertDialogs();

  const defaultValues: IFormInputs = {
    name: "",
    email: "",
    password: "",
  };

  const {
    handleSubmit,
    control: rawControl,
    setValue,
    reset,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues,
  });
  const control = rawControl as unknown as Control;

  const { mutate } = useRegisterUser({
    onSuccess: () => {
      hideLoader();
      showSuccessDialog({
        title: "Cadastro realizado com sucesso!",
        description: "E uma satisfação telo em nosso sistema",
      });
      reset();
    },
  });

  function onSubmit({ name, email, password }: IFormInputs) {
    showLoader();
    mutate({
      name: capitalizeFirstLetter(name),
      email: email.toLowerCase(),
      password,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <InputText
          id="name"
          control={control}
          label="Full Name"
          placeholder="Full Name"
        />
        <InputText
          id="email"
          control={control}
          label="Email"
          placeholder="Email"
        />
        <InputPassword
          id="password"
          control={control}
          label="Password"
          placeholder="Password"
        />
        <InputPassword
          id="passwordConfirmation"
          control={control}
          label="Confirm Password"
          placeholder="Confirm Password"
        />
        <InputCheckBox
          id="accept"
          control={control}
          label="I agree for Terms & Conditions"
          setValue={setValue}
        />
      </FormGroup>
      <FormGroup>
        <Button className="w-100 br-7" color="primary" type="submit">
          Register
        </Button>
      </FormGroup>
      <TermsAndConditions confirmButtonLabel="Sign Up" />
    </Form>
  );
}
