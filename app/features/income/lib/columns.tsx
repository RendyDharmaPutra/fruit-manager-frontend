import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { TableActionTransaction } from "~/core/components/transaction/table_action_transaction";

import { Button } from "~/core/components/ui/button";

export const incomeColumns: ColumnDef<IncomeType>[] = [
  {
    accessorKey: "transactionTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Waktu Transaksi
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "distribution",
    header: () => <div className="text-left ">Jenis Transaksi</div>,
    cell: ({ row }) => {
      const value = row.getValue("distribution")
        ? "Distribusi"
        : "Non-Distribusi";

      return (
        <div className="text-left">
          <p className="text-left font-medium">{value}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: () => <div className="text-right ">Harga Total</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalPrice"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const data = row.original;

      return <TableActionTransaction data={data.code} route="income" />;
    },
  },
];
