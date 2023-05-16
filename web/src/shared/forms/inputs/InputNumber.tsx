import { Control, Controller } from "react-hook-form";
import MessageErrorInput from "./MessageErrorInput";

interface IProps {
  id: string;
  label: string;
  control: Control;
  required?: boolean;
  placeholder?: string;
}

export default function InputNumber({
  id,
  label,
  control,
  required,
  placeholder = "",
}: IProps): JSX.Element {
  return (
    <Controller
      name={id}
      control={control}
      rules={{ required: required ? "Required" : false }}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <div className="form-group mb-3">
          <label className="control-label">{label}</label>
          <input
            id={id}
            type="number"
            name={id}
            value={value > 0 ? value : 0}
            ref={ref}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
          />
          {error?.message && <MessageErrorInput message={error?.message} />}
        </div>
      )}
    />
  );
}
