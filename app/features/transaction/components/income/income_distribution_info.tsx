import { SelectField } from "~/core/components/form/select_field";
import { TextBox } from "~/core/components/form/text_box";

type IncomeDistributionInfoProps = {
  fuel: StuffType[];
};

export const IncomeDistributionInfo = (props: IncomeDistributionInfoProps) => {
  return (
    <section className="p-4 flex flex-col md:flex-row gap-4 w-full rounded-sm border">
      <TextBox
        id="distance"
        label="Jarak"
        type="number"
        placeholder="Masukkan jarak (km)"
      />
      <SelectField id="weather" title="Cuaca" data={weathers} />
      <SelectField id="fuel" title="Bensin" data={props.fuel} />
    </section>
  );
};

const weathers = [
  {
    id: 0,
    name: "Cerah",
  },
  {
    id: 1,
    name: "Hujan",
  },
];
