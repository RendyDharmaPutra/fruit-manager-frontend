import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { NavigationItem } from "./navigation_item";
import { NavigationListItem } from "./navigation_list_item";

const managementRoutes = [
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

const transactionRoutes = [
  {
    name: "Pemasukan",
    route: "/income",
  },
  {
    name: "Pengeluaran",
    route: "/outcome",
  },
];

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
            {managementRoutes.map((item) => (
              <NavigationListItem
                key={item.name}
                route={item.route}
                name={item.name}
              />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem className="relative navigation-item">
        <NavigationMenuTrigger className="flex items-center w-full">
          Transaksi
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute top-10 right-0 p-2 bg-white shadow-md rounded-md">
          <ul className="grid gap-2 w-40">
            {transactionRoutes.map((item) => (
              <NavigationListItem
                key={item.name}
                route={item.route}
                name={item.name}
              />
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <button
        type="button"
        onClick={() => props.setShowLogout((prev) => !prev)}
        className="navigation-item text-danger hover:bg-danger/10"
      >
        Logout
      </button>
    </>
  );
};
