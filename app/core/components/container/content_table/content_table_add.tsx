import { Plus } from "lucide-react";
import { Link } from "@remix-run/react";
import { Button } from "../../ui/button";

type ContentTableAddProps = {
  title: string;
  route: string;
};

export const ContentTableAdd: React.FC<ContentTableAddProps> = (props) => {
  return (
    <Link to={`${props.route}/add`} className="flex w-fit h-fit">
      <Button type="button" className="content-table-add">
        <Plus />
        Tambah {props.title}
      </Button>
    </Link>
  );
};
