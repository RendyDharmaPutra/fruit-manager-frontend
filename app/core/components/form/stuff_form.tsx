import { FormDialog } from "~/core/components/dialog/form_dialog";
import { TextBox } from "~/core/components/form/text_box";

type StuffFormProps = {
  title: string;
  item: string;
  type: "create" | "update";
  data?: Fruit | Fertilizer | Fuel;
  open: boolean;
  setOpen: (val: boolean) => void;
};

export const StuffForm: React.FC<StuffFormProps> = (props) => {
  return (
    <FormDialog
      description={`Masukkan Data ${props.item} disini`}
      open={props.open}
      setOpen={props.setOpen}
      title={`${props.title} ${props.item}`}
    >
      <input type="hidden" name="intent" value={props.type} />
      <input type="hidden" name="id" value={props.data?.id ?? ""} />
      <TextBox
        id="name"
        label={`Nama ${props.item}`}
        placeholder=""
        type="text"
        defaultValue={props.data?.name ?? ""}
      />
      <TextBox
        id="price"
        label={`Harga ${props.item}`}
        placeholder=""
        type="number"
        defaultValue={props.data?.price ?? ""}
      />
    </FormDialog>
  );
};
