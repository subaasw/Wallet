import { useRef } from "react";
import {
  EllipsisVerticalIcon,
  PencilSquareIcon,
  ArchiveBoxIcon,
  ShareIcon,
  MinusCircleIcon,
} from "@heroicons/react/24/solid";
import IconButton from "@/components/IconButton";

const Menu = () => {
  const menuRef = useRef(null);

  const closeToggle = () => {
    const menuRefClassList = menuRef.current.classList;

    if (menuRefClassList.contains("hidden")) {
      menuRefClassList.remove("hidden");
    } else {
      menuRefClassList.add("hidden");
    }

    // if (!menuRef.current.parentNode.contains(e?.target)) {
    //   console.log("vvvv", "inside", menuRefClassList);
    //   menuRefClassList.add("hidden");
    // } else {
    //   // menuRefClassList.add("hidden");

    //   menuRefClassList.remove("hidden");
    //   // }
    //   console.log("vvvv", "outside", menuRefClassList);
    // }

    return true;
  };

  // useEffect(() => {
  //   document.addEventListener("click", closeToggle);

  //   // return () => document.removeEventListener("click", closeToggle);
  // }, []);

  return (
    <div className="menu_section">
      <IconButton onClick={closeToggle}>
        <EllipsisVerticalIcon className="more_vert_icon" />
      </IconButton>

      <ul ref={menuRef} className="submenu_items hidden">
        <li>
          Edit <PencilSquareIcon />
        </li>
        <li>
          Courier Info <ArchiveBoxIcon />
        </li>
        <li>
          Share <ShareIcon />
        </li>
        <li className="text_danger">
          Remove <MinusCircleIcon />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
