import { currencyFormat } from "~/core/utils/formatter/currenty_format";

type DetailCardContentProps = {
  price: number;
  label: "Kuantitas" | "Berat";
  value: number;
};

export const DetailCardContent = (props: DetailCardContentProps) => {
  return (
    <section className="flex flex-row gap-6 md:justify-between w-full ">
      <p className="text-sm font-medium text-gray-800">
        {currencyFormat(props.price)}
      </p>
      <p className="text-sm text-gray-700">
        {props.label}: {props.value}
      </p>
    </section>
  );
};
