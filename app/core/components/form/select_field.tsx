import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/core/components/ui/select";
import { Label } from "../ui/label";

type SelectFieldProps<T extends { id?: string | number; name: string }> = {
  id: string;
  title: string;
  data: T[];
  onChange?: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectField = <T extends { id?: string | number; name: string }>(
  props: SelectFieldProps<T>
) => {
  return (
    <div className="relative flex flex-col items-start gap-4 w-full">
      <Label htmlFor={props.id} className="-mb-2.5">
        {props.title}
      </Label>
      <Select onValueChange={props.onChange}>
        <SelectTrigger id={props.id} className="w-full">
          <SelectValue placeholder={`Pilih ${props.title}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{props.title}</SelectLabel>
            {props.data.map((data) => (
              <SelectItem key={data.id} value={`${data.id!}`}>
                {data.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
