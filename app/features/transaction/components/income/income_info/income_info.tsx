type IncomeInfoProps = {
  value: string;
  small: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const IncomeInfo = (props: IncomeInfoProps) => {
  const textSize = props.small
    ? "text-sm md:text-base"
    : "text-base md:text-lg";

  return (
    <span
      className={`flex flex-row items-center gap-2 ${textSize} text-gray-600`}
    >
      {props.children}
      <p className={`${props.className} text-black`}>{props.value}</p>
    </span>
  );
};
