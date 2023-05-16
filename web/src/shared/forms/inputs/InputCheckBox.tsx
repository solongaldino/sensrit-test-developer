import { useState } from "react";
import { Control, Controller } from "react-hook-form";
import MessageErrorInput from "./MessageErrorInput";

interface IProps {
  id: string;
  label: string;
  control: Control;
  required?: boolean;
  setValue: any;
}

export default function InputCheckBox({
  id,
  label,
  control,
  required,
  setValue,
}: IProps): JSX.Element {
  const [checked, setChecked] = useState(false);

  setValue(id, checked);

  function toggleCheckbox(e: React.MouseEvent<HTMLInputElement>) {
    setChecked(!checked);
    setValue(id, checked);
  }

  return (
    <Controller
      name={id}
      control={control}
      rules={{ required: required ? "Required" : false }}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <div className="form-group">
          <div
            onClick={toggleCheckbox}
            className="custom-control custom-checkbox has-validation"
          >
            <input
              id={id}
              type="checkbox"
              name={id}
              value={value}
              ref={ref}
              className={`custom-control-input ${error ? "is-invalid" : ""}`}
              onChange={onChange}
              checked={checked}
            />
            <label className="custom-control-label">{label}</label>
            {error?.message && <MessageErrorInput message={error?.message} />}
          </div>
        </div>
      )}
    />
  );
}
