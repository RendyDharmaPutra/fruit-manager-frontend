import { useSelectedTransaction } from "~/core/lib/context/selected_transaction_context";
import { ContentTable } from "../container/content_table/content_table";
import { ContentTableAdd } from "../container/content_table/content_table_add";
import { DeleteDialog } from "../dialog/delete_dialog";
import { useDeleteDialog } from "~/core/lib/context/dialog_context/delete_dialog_context";
import { showStandardToast } from "~/core/lib/hooks/show_standard_toast";
import { ColumnDef } from "@tanstack/react-table";

type TransactionPageContentProps<T, R> = {
  title: "Pemasukan" | "Pengeluaran";
  actionRes?: R;
  loaderData: SuccessResponseType<T[]> | FailedResponseType<string>;
  transactionColumns: ColumnDef<T>[];
};

export const TransactionPageContent = <T, R extends RawResponseType>(
  props: TransactionPageContentProps<T, R>
) => {
  const { open, setOpen } = useDeleteDialog();

  const { selectedItem } = useSelectedTransaction();

  props.actionRes != undefined && showStandardToast(props.actionRes);

  return (
    <ContentTable
      title={props.title}
      columns={props.transactionColumns}
      loaderData={props.loaderData}
    >
      <ContentTableAdd title={props.title} route="/income" />
      <DeleteDialog
        id={selectedItem!}
        name="code"
        open={open}
        setOpen={setOpen}
        title={props.title}
      />
    </ContentTable>
  );
};
