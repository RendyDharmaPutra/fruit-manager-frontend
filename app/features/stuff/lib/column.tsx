import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "~/core/components/ui/button";
import { TableActionStuff } from "../components/table_action_stuff";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";
import { Authorized } from "~/core/components/container/authorized";

export const stuffColumns: ColumnDef<StuffType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Harga</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      return (
        <div className="text-right font-medium">{currencyFormat(amount)}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return (
        <Authorized roles={"MANAGER"}>
          <TableActionStuff data={data} />
        </Authorized>
      );
    },
  },
];
