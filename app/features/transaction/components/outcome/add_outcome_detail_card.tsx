import { X } from "lucide-react";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";
import { useOutcomeDetail } from "../../lib/context/detail_transaction_context";

type AddOutcomeDetailCardProps = {
  detail: DetailOfOutcomeType;
};

export const AddOutcomeDetailCard = (props: AddOutcomeDetailCardProps) => {
  const { setSelectedDetail } = useOutcomeDetail();

  return (
    <div className="relative px-4 py-3 flex flex-col gap-2 md:gap-4 w-full min-w-[220px] max-w-full h-fulls rounded-md border">
      <button
        type="button"
        onClick={() =>
          setSelectedDetail((prev) =>
            prev.filter((prev) => prev !== props.detail)
          )
        }
        className="absolute top-1 right-1 p-1 rounded-md hover:bg-gray-200 duration-300"
      >
        <X className="w-4 h-4" />
      </button>

      <CardHeader
        fertilizeName={props.detail.fertilizer.name}
        fruitName={props.detail.fruit.name}
      />
      <CardContent
        price={props.detail.fertilizer.price}
        count={props.detail.count}
      />
      <CardFooter price={props.detail.price} />
    </div>
  );
};

type OutcomeDetailCardHeaderProps = {
  fertilizeName: string;
  fruitName: string;
};

const CardHeader = (props: OutcomeDetailCardHeaderProps) => {
  return (
    <section className="flex flex-col justify-between w-full ">
      <p className="text-base md:text-lg font-semibold text-gray-800">
        {props.fertilizeName}
      </p>
      <p className="text-sm text-gray-700">
        untuk Buah <span className="font-semibold">{props.fruitName}</span>
      </p>
    </section>
  );
};

type OutcomeDetailCardContentProps = {
  price: number;
  count: number;
};

const CardContent = (props: OutcomeDetailCardContentProps) => {
  return (
    <section className="flex flex-row gap-6 md:gap-16 w-full ">
      <p className="text-sm font-medium text-gray-800">
        {currencyFormat(props.price)}
      </p>
      <p className="text-sm text-gray-700">Kuantitas: {props.count}</p>
    </section>
  );
};

type OutcomeDetailCardFooterProps = {
  price: number;
};

const CardFooter = (props: OutcomeDetailCardFooterProps) => {
  return (
    <section className="mt-1 pt-2 flex flex-row justify-between w-full  border-t">
      <p className="text-sm md:text-base font-medium text-gray-800">Subtotal</p>
      <p className="text-sm md:text-base font-semibold text-gray-800">
        {currencyFormat(props.price)}
      </p>
    </section>
  );
};
