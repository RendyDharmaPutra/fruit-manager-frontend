import { DateField } from "~/core/components/form/date_field";
import { SubmitBtn } from "~/core/components/form/submit_btn";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";
import { useTransactionValidation } from "../../lib/context/transaction_validation_context";
import { useEffect, useMemo } from "react";
import { getFirstError } from "../../lib/utils/get_first_array";

type AddTransactionInfoProps<T, R> = {
  title: "Pengeluaran" | "Pemasukan";
  totalPrice: number;
  data: T[];
  transactionDetailCallback: (detail: T) => R;
  children?: React.ReactNode;
};

export const AddTransactionInfo = <T, R>(
  props: AddTransactionInfoProps<T, R>
) => {
  const { validationError } = useTransactionValidation();

  // Parsing menjadi bentuk details untuk dikirimkan ke API
  const transactionDetail = useMemo(() => {
    return props.data.map(props.transactionDetailCallback);
  }, [props.data]);

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
        error={getFirstError(validationError?.transactionTime)}
      />
      <input type="hidden" name="totalPrice" value={props.totalPrice} />
      <input
        type="hidden"
        name="details"
        value={JSON.stringify(transactionDetail)}
      />

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
        {validationError?.totalPrice && (
          <p className="text-xs text-danger">
            {validationError?.totalPrice[0]}
          </p>
        )}
        {validationError?.details && (
          <p className="text-xs text-danger">{validationError?.details[0]}</p>
        )}
      </section>
      <div className="flex justify-end w-full ">
        <SubmitBtn fit title={`Simpan ${props.title}`} />
      </div>
    </section>
  );
};
