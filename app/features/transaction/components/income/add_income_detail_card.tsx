import { X } from "lucide-react";
import { useIncomeDetail } from "../../lib/context/income_detail_context";
import { DetailCardHeader } from "../detail_card/detail_card_header";
import { DetailCardContent } from "../detail_card/detail_card_content";
import { DetailCardFooter } from "../detail_card/detail_card_footer";

type AddIncomeDetailCardProps = {
  detail: DetailOfIncomeType;
};

export const AddIncomeDetailCard = (props: AddIncomeDetailCardProps) => {
  const { setSelectedDetail, setTotalPrice } = useIncomeDetail();

  return (
    <div className="relative px-4 py-3 flex flex-col gap-2 md:gap-4 w-full min-w-[220px] max-w-full h-fulls rounded-md border">
      <button
        type="button"
        onClick={() => {
          setSelectedDetail((prev) =>
            prev.filter((prev) => prev !== props.detail)
          );

          setTotalPrice((prev) => prev - props.detail.price);
        }}
        className="absolute top-1 right-1 p-1 rounded-md hover:bg-gray-200 duration-300"
      >
        <X className="w-4 h-4" />
      </button>

      <DetailCardHeader fruitName={props.detail.fruit.name} />
      <DetailCardContent
        price={props.detail.fruit.price}
        label="Berat"
        value={props.detail.weight}
      />
      <DetailCardFooter price={props.detail.price} />
    </div>
  );
};
