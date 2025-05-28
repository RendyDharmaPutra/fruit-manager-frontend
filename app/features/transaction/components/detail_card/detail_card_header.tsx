type DetailCardHeaderProps = {
  fruitName: string;
  children?: React.ReactNode;
};

export const DetailCardHeader = (props: DetailCardHeaderProps) => {
  return (
    <section className="flex flex-col justify-between w-full ">
      <p className="text-base md:text-lg font-semibold text-gray-800">
        {props.fruitName}
      </p>
      {props.children}
    </section>
  );
};
