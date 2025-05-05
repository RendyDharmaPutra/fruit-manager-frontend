import { PageContainer } from "~/core/components/container/page_container";
import { SelectedStuffProvider } from "../lib/context/selected_stuff_context";
import { useErrorStuff } from "../lib/context/error_stuff_context";

type StuffPageContainerProps<T> = {
  actionRes?: T;
  children: React.ReactNode;
};

export const StuffPageContainer = <T extends RawResponseType>(
  props: StuffPageContainerProps<T>
) => {
  const { setValidationError } = useErrorStuff();

  return (
    <SelectedStuffProvider>
      <PageContainer
        actionRes={props.actionRes}
        setValidationError={setValidationError}
      >
        {props.children}
      </PageContainer>
    </SelectedStuffProvider>
  );
};
