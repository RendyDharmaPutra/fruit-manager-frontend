import { useSelectedTransaction } from "~/core/lib/context/selected_transaction_context";
import { ContentTableAdd } from "../container/content_table/content_table_add";
import { DeleteDialog } from "../dialog/delete_dialog";
import { useDeleteDialog } from "~/core/lib/context/dialog_context/delete_dialog_context";
import { showStandardToast } from "~/core/lib/hooks/show_standard_toast";
import { ColumnDef } from "@tanstack/react-table";
import { ContentTableBody } from "../container/content_table/content_table_body";

type TransactionPageContentProps<T, R> = {
  title: "Pemasukan" | "Pengeluaran";
  actionRes?: R;
  loaderData: SuccessResponseType<T[]>;
  transactionColumns: ColumnDef<T>[];
};

export const TransactionPageContent = <T, R extends RawResponseType>(
  props: TransactionPageContentProps<T, R>
) => {
  const { open, setOpen } = useDeleteDialog();

  const { selectedItem } = useSelectedTransaction();

  props.actionRes != undefined && showStandardToast(props.actionRes);

  return (
    <ContentTableBody
      title={props.title}
      columns={props.transactionColumns}
      data={props.loaderData.data.data}
    >
      <ContentTableAdd title={props.title} route="/income" />
      <DeleteDialog
        id={selectedItem!}
        name="code"
        open={open}
        setOpen={setOpen}
        title={props.title}
      />
    </ContentTableBody>
  );
};
