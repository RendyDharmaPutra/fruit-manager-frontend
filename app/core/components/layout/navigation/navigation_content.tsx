import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { NavigationItem } from "./navigation_item";
import { NavigationListItem } from "./navigation_list_item";

const managementRoutesForManager = [
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

const transactionRoutesForManager = [
  {
    name: "Pemasukan",
    route: "/income",
  },
  {
    name: "Pengeluaran",
    route: "/outcome",
  },
];

const managementRoutesForCashier = [
  {
    name: "Buah",
    route: "/fruit",
  },
  {
    name: "Bensin",
    route: "/fuel",
  },
];

const transactionRoutesForCashier = [
  {
    name: "Pemasukan",
    route: "/income",
  },
];

export const NavigationContent = (props: NavigationContentProps) => {
  const managementRoutes =
    props.user.role === "MANAGER"
      ? managementRoutesForManager
      : managementRoutesForCashier;

  const transactionRoutes =
    props.user.role === "MANAGER"
      ? transactionRoutesForManager
      : transactionRoutesForCashier;

  return (
    <>
      <NavigationMenuItem className="relative navigation-item">
        <NavigationMenuTrigger className="flex items-center w-full">
          Manajemen
        </NavigationMenuTrigger>
        <NavigationMenuContent className="absolute top-10 right-0 p-2 bg-background shadow-md rounded-md">
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
        <NavigationMenuContent className="absolute top-10 right-0 p-2 bg-background shadow-md rounded-md">
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
