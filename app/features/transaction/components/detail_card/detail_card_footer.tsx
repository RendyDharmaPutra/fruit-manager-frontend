import { currencyFormat } from "~/core/utils/formatter/currenty_format";

type DetailCardFooterProps = {
  price: number;
};

export const DetailCardFooter = (props: DetailCardFooterProps) => {
  return (
    <section className="mt-1 pt-2 flex flex-row justify-between w-full  border-t">
      <p className="text-sm md:text-base font-medium text-gray-800">Subtotal</p>
      <p className="text-sm md:text-base font-semibold text-gray-800">
        {currencyFormat(props.price)}
      </p>
    </section>
  );
};
