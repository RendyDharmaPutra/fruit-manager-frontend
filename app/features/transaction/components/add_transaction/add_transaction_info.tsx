import { SubmitBtn } from "~/core/components/form/submit_btn";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";

type AddTransactionInfoProps = {
  title: "Pengeluaran" | "Pemasukan";
  children?: React.ReactNode;
};

export const AddTransactionInfo = (props: AddTransactionInfoProps) => {
  return (
    <section className="p-4 flex flex-col gap-4 md:gap-8 w-full rounded-lg border">
      <section className="w-full ">
        <h6 className="text-xl md:text-2xl  font-semibold text-gray-900">
          Informasi {props.title}
        </h6>
      </section>

      {props.children}

      <section className="flex flex-col w-full ">
        <div className="flex flex-row justify-between">
          <h6 className="text-base md:text-lg font-semibold text-gray-800">
            Total Harga
          </h6>
          <h6 className="text-base md:text-lg font-semibold text-gray-800">
            {currencyFormat(10000)}
          </h6>
        </div>
      </section>
      <div className="flex justify-end w-full ">
        <SubmitBtn fit title={`Simpan ${props.title}`} />
      </div>
    </section>
  );
};
