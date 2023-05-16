import { Control, Controller } from "react-hook-form";
import MessageErrorInput from "./MessageErrorInput";
import { FormGroup, Label } from "reactstrap";

interface Option {
  label: string;
  value: string | number;
}

interface IProps {
  id: string;
  label: string;
  control: Control;
  required?: boolean;
  setValue: any;
  options: Option[];
  placeholder?: string;
}

export default function Select({
  id,
  label,
  control,
  required,
  setValue,
  options,
  placeholder,
}: IProps): JSX.Element {
  function onSelected(event: React.ChangeEvent<HTMLSelectElement>) {
    setValue(id, event.currentTarget.value);
  }

  return (
    <Controller
      name={id}
      control={control}
      rules={{ required: required ? "Required" : false }}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <div className="form-group mb-3 tg-inputwithicon">
          {label && (
            <Label className="form-label" htmlFor={id}>
              {label}
            </Label>
          )}
          <FormGroup>
            <select
              onChange={onSelected}
              className="bg-white text-muted w-100 p-2 rounded border"
            >
              <option className="" value="none">
                {placeholder}
              </option>
              {options.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </FormGroup>
          {error?.message && (
            <>
              <br />
              <MessageErrorInput message={error?.message} />
            </>
          )}
        </div>
      )}
    />
  );
}
