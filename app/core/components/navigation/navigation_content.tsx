import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { NavigationItem } from "./navigation_item";
import { NavigationListItem } from "./navigation_list_item";
import { Form } from "@remix-run/react";

const menuListItem = [
  {
    name: "Buah",
    route: "/fruit",
  },
  {
    name: "Pupuk",
    route: "/fertilizer",
  },
  {
    name: "Bensin",
    route: "/fuel",
  },
];

type NavigationContentProps = {};

export const NavigationContent = (props: NavigationContentProps) => {
  return (
    <>
      <NavigationItem route="/" name="Beranda" />

      <NavigationMenuItem className="relative navigation-item">
        <NavigationMenuTrigger className="flex items-center w-full">
          Manajemen
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute top-10 right-0 p-2 bg-white shadow-md rounded-md">
          <ul className="grid gap-2 w-40">
            {menuListItem.map((item) => (
              <NavigationListItem
                key={item.name}
                route={item.route}
                name={item.name}
              />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <Form action="/logout" method="post">
        <button
          type="submit"
          className="navigation-item text-danger hover:bg-danger/10"
        >
          Logout
        </button>
      </Form>
    </>
  );
};
