import {
  NavigationMenu,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { NavigationContent } from "./navigation_content";

type NavigationLargeProps = NavigationContentProps & {};

export const NavigationLarge = (props: NavigationLargeProps) => {
  return (
    <NavigationMenu className="flex-1 hidden lg:flex justify-end items-center">
      <NavigationMenuList className="hidden lg:flex flex-row gap-6 center">
        <NavigationContent setShowLogout={props.setShowLogout} />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
