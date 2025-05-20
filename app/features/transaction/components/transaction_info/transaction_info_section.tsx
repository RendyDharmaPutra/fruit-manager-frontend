import { Calendar, ReceiptText, Wallet } from "lucide-react";
import { dateFormat } from "~/core/utils/formatter/date_format";
import { TransactionInfo } from "./transaction_info";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";

type TransactionInfoSectionProps<T> = {
  data: T;
  children?: React.ReactNode;
};

export const TransactionInfoSection = <T extends TransactionType>(
  props: TransactionInfoSectionProps<T>
) => {
  return (
    <section className="relative p-content flex flex-col md:flex-row  md:justify-between gap-6">
      <div className="mt-6 md:mt-0 flex flex-col gap-2">
        <TransactionInfo
          small={false}
          value={props.data.code}
          className="font-semibold"
        >
          <ReceiptText className="w-5 h-5" />
        </TransactionInfo>

        <TransactionInfo small value={dateFormat(props.data.transactionTime)}>
          <Calendar className="w-4 h-4" />
          Waktu Transaksi:
        </TransactionInfo>
      </div>

      <div className="flex flex-col md:items-end gap-2">
        {props.children}

        <TransactionInfo
          small={false}
          value={currencyFormat(props.data.totalPrice)}
          className="font-semibold"
        >
          <Wallet className="w-5 h-5" />
          Total Harga:
        </TransactionInfo>
      </div>
    </section>
  );
};
