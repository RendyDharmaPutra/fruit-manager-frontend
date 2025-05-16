export const NavMenuBtn = (props: {
  action: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => props.action((prev) => !prev)}
      className="flex flex-col lg:hidden tems-center justify-center gap-1 w-5 "
    >
      <div className="w-full h-[2px] rounded-full bg-primary"></div>
      <div className="w-full h-[2px] rounded-full bg-primary"></div>
      <div className="w-full h-[2px] rounded-full bg-primary"></div>
    </button>
  );
};
