import { cn } from "~/lib/utils";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

type DateFieldProps = {
  name: string;
  placeholder: string;
};

export const DateField = (props: DateFieldProps) => {
  const [date, setDate] = useState<Date>();

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{props.placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <input
        type="hidden"
        name={props.name}
        value={date ? format(date, "yyyy-MM-dd") : ""}
      />
    </>
  );
};
