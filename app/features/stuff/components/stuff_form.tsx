import { FormDialog } from "~/core/components/dialog/form_dialog";
import { TextBox } from "~/core/components/form/text_box";
import { useErrorStuff } from "../lib/context/error_stuff_context";
import { resetValidationError } from "~/core/lib/hooks/reset_validation_error";

type StuffFormProps = {
  title: string;
  item: string;
  type: "create" | "update";
  data?: StuffType;
  open: boolean;
  setOpen: (val: boolean) => void;
};

export const StuffForm: React.FC<StuffFormProps> = (props) => {
  const { validationError, setValidationError } = useErrorStuff();

  resetValidationError(props.open, validationError, setValidationError);

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
        error={validationError?.name}
      />
      <TextBox
        id="price"
        label={`Harga ${props.item}`}
        placeholder=""
        type="number"
        defaultValue={props.data?.price ?? ""}
        error={validationError?.price}
      />
    </FormDialog>
  );
};
