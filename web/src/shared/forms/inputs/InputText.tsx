import { Input, Label } from "reactstrap";
import { Control, Controller } from "react-hook-form";
import { MessageErrorInput } from ".";

interface IProps {
  id: string;
  control: Control;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export default function InputText({
  id,
  control,
  placeholder = "",
  label,
  required,
}: IProps): JSX.Element {
  return (
    <Controller
      name={id}
      control={control}
      rules={{ required: required ? "Required" : false }}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <>
          {label && (
            <Label className="form-label" htmlFor={id}>
              {label}
            </Label>
          )}
          <div className="input-group has-validation mb-4">
            <Input
              id={id}
              name={id}
              type="text"
              className={`form-control  ${error ? "is-invalid" : ""}`}
              placeholder={placeholder}
              value={value}
              ref={ref}
              onChange={onChange}
            />
            {error?.message && <MessageErrorInput message={error?.message} />}
          </div>
        </>
      )}
    />
  );
}
