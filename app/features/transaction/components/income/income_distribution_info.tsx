import { useMemo, useState } from "react";
import { SelectField } from "~/core/components/form/select_field";
import { TextBox } from "~/core/components/form/text_box";

type IncomeDistributionInfoProps = {
  fuel: StuffType[];
};

export const IncomeDistributionInfo = (props: IncomeDistributionInfoProps) => {
  const [weather, setWeather] = useState("");
  const [fuel, setFuel] = useState("");

  const fuelPrice = useMemo(() => {
    return props.fuel.find((fuelData) => fuelData.id! === Number(fuel))?.price;
  }, [fuel]);

  return (
    <section className="p-4 flex flex-col md:flex-row gap-4 w-full rounded-sm border">
      <TextBox
        id="distance"
        label="Jarak"
        type="number"
        placeholder="Masukkan jarak (km)"
      />
      <SelectField
        id="weather"
        title="Cuaca"
        data={weathers}
        onChange={setWeather}
      />
      <input type="hidden" name="weather" value={weather} />

      <SelectField
        id="fuel"
        title="Bensin"
        data={props.fuel}
        onChange={setFuel}
      />
      <input type="hidden" name="fuel" value={fuelPrice} />
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
