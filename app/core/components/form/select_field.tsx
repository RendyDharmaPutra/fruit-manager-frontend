import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/core/components/ui/select";

type SelectFieldProps = {
  title: string;
  data: StuffType[];
};

export const SelectField = (props: SelectFieldProps) => {
  return (
    <Select>
      <SelectTrigger className="w-full">
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
  );
};
