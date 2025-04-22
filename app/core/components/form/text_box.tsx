import { Input } from "../ui/input";
import { Label } from "../ui/label";

type TextBoxProps = {
  id: string;
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
};

export const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <div className="flex flex-col gap-1.5 ">
      <Label htmlFor={props.id}>{props.label}</Label>
      <Input
        type={props.type}
        id={props.id}
        name={props.id}
        placeholder={`Masukkan ${props.label}`}
      />
    </div>
  );
};
