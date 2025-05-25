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

type SelectFieldProps = {
  id: string;
  title: string;
  data: StuffType[];
  onChange?: React.Dispatch<React.SetStateAction<string>>;
};

export const SelectField = (props: SelectFieldProps) => {
  return (
    <>
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
    </>
  );
};
