import { ContentTable } from "~/core/components/container/content_table/content_table";
import { StuffContentTableAdd } from "./stuff_content_table_add";
import { StuffDialogWrapper } from "./stuff_dialog_wrapper";
import { ColumnDef } from "@tanstack/react-table";
import { showToast } from "~/core/lib/hooks/show_toast";

type StuffPageContentProps<T> = {
  title: "Buah" | "Bensin" | "Pupuk";
  actionRes?: T;
  loaderData: SuccessResponseType<StuffType[]> | FailedResponseType<string>;
  stuffColumns: ColumnDef<StuffType>[];
};

export const StuffPageContent = <T extends RawResponseType>(
  props: StuffPageContentProps<T>
) => {
  props.actionRes != undefined && showToast(props.actionRes);

  return (
    <ContentTable
      title={props.title}
      columns={props.stuffColumns}
      loaderData={props.loaderData}
    >
      <StuffContentTableAdd title={props.title} />
      <StuffDialogWrapper title={props.title} />
    </ContentTable>
  );
};
