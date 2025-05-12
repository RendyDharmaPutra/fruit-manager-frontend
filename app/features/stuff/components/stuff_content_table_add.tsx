import { Plus } from "lucide-react";
import { Button } from "~/core/components/ui/button";
import { useAddDialog } from "~/core/lib/context/dialog_context/add_dialog_context";

type StuffContentTableAddProps = {
  title: string;
};

export const StuffContentTableAdd: React.FC<StuffContentTableAddProps> = (
  props
) => {
  const { setOpen } = useAddDialog();

  return (
    <Button
      onClick={() => setOpen(true)}
      type="button"
      className="content-table-add"
    >
      <Plus />
      Tambah {props.title}
    </Button>
  );
};
