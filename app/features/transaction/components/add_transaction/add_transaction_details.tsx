import { Plus } from "lucide-react";
import { Button } from "~/core/components/ui/button";

type AddTransactionDetailsProps = {
  title: "Pengeluaran" | "Pemasukan";
  subtitle: "Pupuk" | "Buah";
  openFormDetail: any; // ! Ubah tipe yang tepat
  children: React.ReactNode;
};

export const AddTransactionDetails = (props: AddTransactionDetailsProps) => {
  return (
    <section className="p-4 flex flex-col gap-4 md:gap-8 w-full rounded-lg border">
      <section className="flex flex-col md:flex-row md:justify-between gap-3 w-full ">
        <h6 className="text-xl md:text-2xl  font-semibold text-gray-900">
          Detail {props.title}
        </h6>

        <Button type="button" onClick={() => props.openFormDetail()}>
          <Plus />
          Tambah {props.subtitle}
        </Button>
      </section>

      {props.children}
    </section>
  );
};
