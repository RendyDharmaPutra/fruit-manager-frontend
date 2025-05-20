import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { TableActionTransaction } from "~/features/transaction/components/table_action_transaction";

import { Button } from "~/core/components/ui/button";
import { dateFormat } from "~/core/utils/formatter/date_format";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";

export const outcomeColumns: ColumnDef<OutcomeType>[] = [
  {
    accessorKey: "transactionTime",
    header: ({ column }) => {
      return (
        <div className="text-left">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Waktu Transaksi
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const date: string = row.getValue("transactionTime");
      return <div className="text-left font-medium">{dateFormat(date)}</div>;
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div className="text-right ">Harga Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));

      return (
        <div className="text-right font-medium">{currencyFormat(amount)}</div>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return <TableActionTransaction data={data.code} route="outcome" />;
    },
  },
];
