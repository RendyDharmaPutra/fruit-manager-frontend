import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "~/core/components/ui/button";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";

export const outcomeDetailColumns: ColumnDef<DetailOfOutcomeType>[] = [
  {
    accessorKey: "fertilizer.name",
    header: () => <div className="text-left ">Pupuk</div>,
  },
  {
    accessorKey: "fruit.name",
    header: () => <div className="text-left ">Untuk Buah</div>,
  },
  {
    accessorKey: "count",
    header: () => <div className="text-center ">Kuantitas</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("count")}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Harga
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      return (
        <div className="text-center font-medium">{currencyFormat(amount)}</div>
      );
    },
  },
];
