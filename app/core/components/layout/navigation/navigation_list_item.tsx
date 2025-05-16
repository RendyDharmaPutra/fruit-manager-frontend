import { Link } from "@remix-run/react";

type NavigationListItemProps = { route: string; name: string };

export const NavigationListItem = (props: NavigationListItemProps) => {
  return (
    <li>
      <Link
        to={props.route}
        className="block px-2 py-1 rounded hover:bg-gray-300 duration-300"
      >
        {props.name}
      </Link>
    </li>
  );
};
