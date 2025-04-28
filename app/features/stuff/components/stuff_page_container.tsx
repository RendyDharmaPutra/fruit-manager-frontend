import { PageContainer } from "~/core/components/container/page_container";
import { SelectedStuffProvider } from "../lib/context/selected_stuff_context";

type StuffPageContainerProps = {
  children: React.ReactNode;
};

export const StuffPageContainer: React.FC<StuffPageContainerProps> = (
  props
) => {
  return (
    <SelectedStuffProvider>
      <PageContainer>{props.children}</PageContainer>
    </SelectedStuffProvider>
  );
};
