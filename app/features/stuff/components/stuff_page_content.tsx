import { StuffContentTableAdd } from "./stuff_content_table_add";
import { StuffDialogWrapper } from "./stuff_dialog_wrapper";
import { ColumnDef } from "@tanstack/react-table";
import { showToast } from "~/core/lib/hooks/show_toast";
import { ContentTableBody } from "~/core/components/container/content_table/content_table_body";

type StuffPageContentProps<T> = {
  title: "Buah" | "Bensin" | "Pupuk";
  actionRes?: T;
  loaderData: SuccessResponseType<StuffType[]>;
  stuffColumns: ColumnDef<StuffType>[];
};

export const StuffPageContent = <T extends RawResponseType>(
  props: StuffPageContentProps<T>
) => {
  props.actionRes != undefined && showToast(props.actionRes);

  return (
    <ContentTableBody
      title={props.title}
      columns={props.stuffColumns}
      data={props.loaderData.data.data}
    >
      <StuffContentTableAdd title={props.title} />
      <StuffDialogWrapper title={props.title} />
    </ContentTableBody>
  );
};
