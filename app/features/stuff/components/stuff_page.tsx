import { ContentTable } from "~/core/components/container/content_table/content_table";
import { ErrorStuffProvider } from "../lib/context/error_stuff_context";
import { StuffPageContainer } from "./stuff_page_container";
import { StuffDialogWrapper } from "./stuff_dialog_wrapper";
import { ColumnDef } from "@tanstack/react-table";

type StuffPageProps<T> = {
  title: "Buah" | "Bensin" | "Pupuk";
  actionRes?: T;
  loaderData: SuccessResponseType<StuffType[]> | FailedResponseType<string>;
  stuffColumns: ColumnDef<StuffType>[];
};

export const StuffPage = <T extends RawResponseType>(
  props: StuffPageProps<T>
) => {
  return (
    <ErrorStuffProvider>
      <StuffPageContainer actionRes={props.actionRes}>
        <ContentTable
          title={props.title}
          actionRes={props.actionRes}
          columns={props.stuffColumns}
          loaderData={props.loaderData}
        >
          <StuffDialogWrapper title={props.title} />
        </ContentTable>
      </StuffPageContainer>
    </ErrorStuffProvider>
  );
};
