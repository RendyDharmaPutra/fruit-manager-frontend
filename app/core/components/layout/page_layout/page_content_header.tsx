type PageContentHeaderProps = {
  title: string;
};

export const PageContentHeader: React.FC<PageContentHeaderProps> = (props) => {
  return (
    <section className="px-8 py-4 w-full border-b border-border">
      <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0">
        {props.title}
      </h2>
    </section>
  );
};
