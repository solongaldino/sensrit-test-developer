import { useState } from "react";
import { Input, Label } from "reactstrap";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Control, Controller } from "react-hook-form";
import { MessageErrorInput } from ".";

interface IProps {
  id: string;
  control: Control;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

export default function InputPassword({
  id,
  control,
  placeholder = "",
  label,
  required,
}: IProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

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
          <div className="input-group mb-4">
            <Input
              id={id}
              name={id}
              type={isVisible ? "text" : "password"}
              className={`form-control  ${error ? "is-invalid" : ""}`}
              placeholder={placeholder}
              value={value}
              ref={ref}
              onChange={onChange}
            />
            <button
              type="button"
              className="input-group-text"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
            {error?.message && <MessageErrorInput message={error?.message} />}
          </div>
        </>
      )}
    />
  );
}
