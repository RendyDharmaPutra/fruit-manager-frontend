import { X } from "lucide-react";
import { currencyFormat } from "~/core/utils/formatter/currenty_format";

type AddOutcomeDetailCardProps = {};

export const AddOutcomeDetailCard = (props: AddOutcomeDetailCardProps) => {
  return (
    <div className="relative px-4 py-3 flex flex-col gap-2 md:gap-4 w-full min-w-[220px] max-w-full h-fulls rounded-md border">
      <button
        type="button"
        className="absolute top-1 right-1 p-1 rounded-md hover:bg-gray-200 duration-300"
      >
        <X className="w-4 h-4" />
      </button>

      <CardHeader />
      <CardContent />
      <CardFooter />
    </div>
  );
};

type OutcomeDetailCardHeaderProps = {};

const CardHeader = (props: OutcomeDetailCardHeaderProps) => {
  return (
    <section className="flex flex-col justify-between w-full ">
      <p className="text-base md:text-lg font-semibold text-gray-800">
        Nama Pupuk
      </p>
      <p className="text-sm text-gray-700">
        untuk Buah <span className="font-semibold">Nama Buah</span>
      </p>
    </section>
  );
};

type OutcomeDetailCardContentProps = {};

const CardContent = (props: OutcomeDetailCardContentProps) => {
  return (
    <section className="flex flex-row gap-6 md:gap-16 w-full ">
      <p className="text-sm font-medium text-gray-800">
        {currencyFormat(10000)}
      </p>
      <p className="text-sm text-gray-700">Kuantitas: 1</p>
    </section>
  );
};

type OutcomeDetailCardFooterProps = {};

const CardFooter = (props: OutcomeDetailCardFooterProps) => {
  return (
    <section className="mt-1 pt-2 flex flex-row justify-between w-full  border-t">
      <p className="text-sm md:text-base font-medium text-gray-800">Subtotal</p>
      <p className="text-sm md:text-base font-semibold text-gray-800">
        {currencyFormat(100000)}
      </p>
    </section>
  );
};
