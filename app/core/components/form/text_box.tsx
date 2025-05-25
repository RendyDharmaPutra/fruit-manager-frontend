import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TextBoxProps = {
  id: string;
  label: string;
  placeholder?: string;
  type: React.HTMLInputTypeAttribute;
  defaultValue?: string | number;
  error?: string[];
  onChange?: React.Dispatch<React.SetStateAction<number>>;
  children?: React.ReactNode;
};

export const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <div className="relative flex flex-col items-start gap-1.5 ">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={`Masukkan ${props.label}`}
        defaultValue={props.defaultValue}
        onChange={(e) => props.onChange?.(Number(e.target.value))}
      />
      {props.error && <p className="text-xs text-danger">{props.error[0]}</p>}
      {props.children}
    </div>
  );
};
