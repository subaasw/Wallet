import { WifiIcon, Battery100Icon } from "@heroicons/react/24/solid";
import { SignalFillIcon } from "@/components/Icons";

const StatusBar = () => {
  const date = new Date();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="status_bar">
      <span>{time}</span>

      <div className="status_icons">
        <SignalFillIcon />
        <WifiIcon />
        <Battery100Icon />
      </div>
    </div>
  );
};

export default StatusBar;
