import { TableAction } from "~/core/components/container/content_table/table_action";
import { ChevronRight } from "lucide-react";
import { DropdownMenuItem } from "~/core/components/ui/dropdown-menu";
import { Link } from "@remix-run/react";
import { useSelectedTransaction } from "~/core/lib/context/selected_transaction_context";

type TableActionTransactionProps = {
  data: string;
  route: "income" | "outcome";
};

export const TableActionTransaction = (props: TableActionTransactionProps) => {
  const { setSelectedItem } = useSelectedTransaction();

  return (
    <TableAction setSelectedItem={() => setSelectedItem(props.data)}>
      <DropdownMenuItem asChild>
        <Link to={`/${props.route}/${props.data}`}>
          <ChevronRight />
          Lihat Lengkap
        </Link>
      </DropdownMenuItem>
    </TableAction>
  );
};
