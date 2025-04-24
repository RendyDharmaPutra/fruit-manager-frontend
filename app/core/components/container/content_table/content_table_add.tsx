import { Plus } from "lucide-react";
import { Button } from "../../ui/button";
import { useAddDialog } from "~/core/lib/context/add_dialog_context";

type ContentTableAddProps = {
  title: string;
};

export const ContentTableAdd: React.FC<ContentTableAddProps> = (props) => {
  const { setOpen } = useAddDialog();

  return (
    <Button
      onClick={() => setOpen(true)}
      type="button"
      className="w-full h-10 lg:w-fit lg:h-fit"
    >
      <Plus />
      Tambah {props.title}
    </Button>
  );
};
