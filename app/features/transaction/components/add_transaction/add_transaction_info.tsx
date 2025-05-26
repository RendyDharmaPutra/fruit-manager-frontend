import { DateField } from "~/core/components/form/date_field";
import { SubmitBtn } from "~/core/components/form/submit_btn";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";
import { useTransactionValidation } from "../../lib/context/transaction_validation_context";

type AddTransactionInfoProps<T> = {
  title: "Pengeluaran" | "Pemasukan";
  totalPrice: number;
  data: T;
  children?: React.ReactNode;
};

export const AddTransactionInfo = <T extends any[]>(
  props: AddTransactionInfoProps<T>
) => {
  const { validationError } = useTransactionValidation();

  return (
    <section className="p-4 flex flex-col gap-4 md:gap-8 w-full rounded-lg border">
      <section className="w-full ">
        <h6 className="text-xl md:text-2xl  font-semibold text-gray-900">
          Informasi {props.title}
        </h6>
      </section>

      <DateField
        name="transactionTime"
        placeholder="Waktu Transaksi"
        error={validationError?.transactionTime[0]}
      />
      <input type="hidden" name="details" value={JSON.stringify(props.data)} />

      {props.children}

      <section className="flex flex-col w-full ">
        <div className="flex flex-row justify-between">
          <h6 className="text-base md:text-lg font-semibold text-gray-800">
            Total Harga
          </h6>
          <h6 className="text-base md:text-lg font-semibold text-gray-800">
            {currencyFormat(props.totalPrice)}
          </h6>
        </div>
        {validationError?.details && (
          <p className="text-xs text-danger">{validationError.details[0]}</p>
        )}
      </section>
      <div className="flex justify-end w-full ">
        <SubmitBtn fit title={`Simpan ${props.title}`} />
      </div>
    </section>
  );
};
