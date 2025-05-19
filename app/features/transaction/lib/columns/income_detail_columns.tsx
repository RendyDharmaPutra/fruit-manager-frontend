import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "~/core/components/ui/button";

export const incomeDetailColumns: ColumnDef<DetailOfIncomeType>[] = [
  {
    accessorKey: "fruit.name",
    header: () => <div className="text-left ">Buah</div>,
  },
  {
    accessorKey: "fruit.price",
    header: () => <div className="text-left ">Harga</div>,
    cell: ({ row }) => {
      const amount = row.original.fruit.price;
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "weight",
    header: () => <div className="text-center ">Berat</div>,
    cell: ({ row }) => {
      return <div className="text-center">{row.getValue("weight")} ons</div>;
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
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount);

      return <div className="text-center font-medium">{formatted}</div>;
    },
  },
];
