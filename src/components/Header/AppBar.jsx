import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import IconButton from "@/components/IconButton";
import Menu from "./NavMenu";

const AppBar = () => {
  return (
    <header className="appBar_header">
      <IconButton>
        <ChevronLeftIcon className="icon_left" />
      </IconButton>
      <h3>Bitcoin Wallet</h3>
      <Menu />
    </header>
  );
};

export default AppBar;
