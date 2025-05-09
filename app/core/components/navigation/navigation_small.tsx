import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { NavigationContent } from "./navigation_content";

type NavigationSmallProps = {};

export const NavigationSmall = (props: NavigationSmallProps) => {
  return (
    <NavigationMenu className="px-12 py-2 flex-1 lg:hidden ">
      <NavigationMenuList className="flex flex-col lg:hidden gap-4  center">
        <NavigationContent />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
