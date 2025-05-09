import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Link } from "@remix-run/react";

type NavigationItemProps = {
  route: string;
  name: string;
};

export const NavigationItem = (props: NavigationItemProps) => {
  return (
    <NavigationMenuItem asChild className="navigation-item">
      <Link to={props.route}>{props.name}</Link>
    </NavigationMenuItem>
  );
};
