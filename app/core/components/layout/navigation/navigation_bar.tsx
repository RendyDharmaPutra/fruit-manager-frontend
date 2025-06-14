import { NavigationLarge } from "./navigation_large";
import { NavigationHeader } from "./navigation_header";

import { NavigationSmall } from "./navigation_small";
import { NavMenuBtn } from "./nav_menu_btn";
import { useState } from "react";
import { LogoutDialog } from "../../dialog/logout_dialog";

type NavigationBarProps = {
  user: UserPayload;
};

export const NavigationBar = (props: NavigationBarProps) => {
  const [open, setOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <>
      <nav className="sticky inset-0 z-50 px-8 py-4 md:py-6 flex flex-row items-center gap-4 w-full bg-background border border-border">
        <NavMenuBtn action={setOpen} />
        <NavigationHeader />
        <NavigationLarge setShowLogout={setShowLogout} user={props.user} />
      </nav>
      {open && (
        <NavigationSmall setShowLogout={setShowLogout} user={props.user} />
      )}
      <LogoutDialog open={showLogout} setOpen={setShowLogout} />
    </>
  );
};
