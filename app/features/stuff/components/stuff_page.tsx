import { ErrorStuffProvider } from "../lib/context/error_stuff_context";
import { StuffPageContainer } from "./stuff_page_container";
import { ColumnDef } from "@tanstack/react-table";
import { StuffPageContent } from "./stuff_page_content";

type StuffPageProps<T> = {
  title: "Buah" | "Bensin" | "Pupuk";
  loaderData: SuccessResponseType<StuffType[]> | FailedResponseType<string>;
  actionRes?: T;
  stuffColumns: ColumnDef<StuffType>[];
};

export const StuffPage = <T extends RawResponseType>(
  props: StuffPageProps<T>
) => {
  return (
    <ErrorStuffProvider>
      <StuffPageContainer
        title={props.title}
        loaderData={props.loaderData}
        actionRes={props.actionRes}
      >
        <StuffPageContent
          title={props.title}
          loaderData={props.loaderData}
          actionRes={props.actionRes}
          stuffColumns={props.stuffColumns}
        />
      </StuffPageContainer>
    </ErrorStuffProvider>
  );
};
