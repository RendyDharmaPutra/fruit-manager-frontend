import { Calendar, ReceiptText, Wallet } from "lucide-react";
import { dateFormat } from "~/core/utils/formatter/date_format";
import { IncomeInfo } from "./income_info";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";

type IncomeInfoSectionProps = {
  IncomeDetail: IncomeDetailType;
};

export const IncomeInfoSection = (props: IncomeInfoSectionProps) => {
  return (
    <section className="relative p-content flex flex-col md:flex-row  md:justify-between gap-6">
      <div className="mt-6 md:mt-0 flex flex-col gap-2">
        <IncomeInfo
          small={false}
          value={props.IncomeDetail.code}
          className="font-semibold"
        >
          <ReceiptText className="w-5 h-5" />
        </IncomeInfo>

        <IncomeInfo
          small
          value={dateFormat(props.IncomeDetail.transactionTime)}
        >
          <Calendar className="w-4 h-4" />
          Waktu Transaksi:
        </IncomeInfo>
      </div>

      <div className="flex flex-col md:items-end gap-2">
        <div className="absolute top-0 right-4 md:static px-3 py-1 w-fit rounded-full text-xs text-gray-600 border border-gray-400 ">
          {props.IncomeDetail.distribution ? "Distribusi" : "Non-Distribusi"}
        </div>

        <IncomeInfo
          small={false}
          value={currencyFormat(props.IncomeDetail.totalPrice)}
          className="font-semibold"
        >
          <Wallet className="w-5 h-5" />
          Total Harga:
        </IncomeInfo>
      </div>
    </section>
  );
};
