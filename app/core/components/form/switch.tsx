import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

type SwitchProps = {
  name: string;
  label: string;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CustomSwitch = (props: SwitchProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id={props.name}
        checked={props.value}
        onCheckedChange={props.setValue}
      />
      <Label htmlFor={props.name}>{props.label}</Label>
    </div>
  );
};
