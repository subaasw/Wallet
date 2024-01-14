import { useState } from "react";

import {
  CreditCardIcon,
  BellIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";
import classNames from "@/utils/classNames";

import IconButton from "@/components/IconButton";
import { ExploreIcon } from "@/components/Icons";

const navItems = [
  { icon: CreditCardIcon, label: "Credit" },
  { icon: ExploreIcon, label: "Explore" },
  { icon: BellIcon, label: "Notification" },
  { icon: Cog8ToothIcon, label: "Setting" },
];

const BottomNavigationBar = () => {
  const [activeMenu, setActiveMenu] = useState(navItems[0].label);
  return (
    <footer className="bottom_nav_bar">
      {navItems.map((item) => {
        const label = item.label;
        return (
          <IconButton
            key={label}
            onClick={() => setActiveMenu(label)}
            className={classNames(activeMenu === label ? "active_nav" : "")}
          >
            <item.icon />
          </IconButton>
        );
      })}
    </footer>
  );
};

export default BottomNavigationBar;
