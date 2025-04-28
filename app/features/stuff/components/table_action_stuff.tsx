import { TableAction } from "~/core/components/container/content_table/table_action";
import { useSelectedStuff } from "../lib/context/selected_stuff_context";

type TableActionStuffProps = {
  data: StuffType;
};

export const TableActionStuff: React.FC<TableActionStuffProps> = (props) => {
  const { setSelectedItem } = useSelectedStuff();

  return <TableAction data={props.data} setSelectedItem={setSelectedItem} />;
};
