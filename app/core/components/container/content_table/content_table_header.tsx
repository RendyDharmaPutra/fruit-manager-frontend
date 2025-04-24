type ContentTableHeaderProps = {
  title: string;
};

export const ContentTableHeader: React.FC<ContentTableHeaderProps> = (
  props
) => {
  return (
    <section className="px-8 py-4 w-full border-b border-black">
      <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0">
        Daftar {props.title}
      </h2>
    </section>
  );
};
