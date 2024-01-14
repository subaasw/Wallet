import { useState } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

import classNames from "@/utils/classNames";

import StatusBar from "@/components/Header/StatusBar";
import AppBar from "@/components/Header/AppBar";
import LineChart from "@/components/Chart";
import BottomNavigationBar from "@/components/Footer";
import WalletDetails from "@/components/Wallet";

import "@/styles/base.scss";

const PriceTag = ({ status = "", label = "" }) => {
  return (
    <div className="price_status_wrapper">
      <span className={`circle ${status}`}></span>
      <p>{label}</p>
    </div>
  );
};

const highLowPriceData = (time = "Day") => {
  switch (time) {
    case "Day":
      return { high: 8.434, low: 3.423 };
    case "Week":
      return { high: 5.534, low: 2.423 };
    case "Month":
      return { high: 6.434, low: 1.44223 };
    case "Year":
    default:
      return { high: 6.895, low: 4.857 };
  }
};

const Charts = () => {
  const TIME = ["Day", "Week", "Month", "Year"];
  const [activeTime, setActiveTime] = useState("Day");

  const { high, low } = highLowPriceData(activeTime);

  return (
    <div className="charts_wrapper">
      <div className="charts_tabs">
        {TIME.map((cTime, index) => (
          <button
            key={index}
            className={classNames(
              "tab_btn",
              activeTime === cTime ? "bg-gray" : ""
            )}
            onClick={() => setActiveTime(cTime)}
          >
            {cTime}
          </button>
        ))}
      </div>

      <div className="card_container">
        <div className="analytics_top">
          <PriceTag status="danger" label={`Lower: $${low}`} />
          <PriceTag status="good" label={`Higher: $${high}`} />
        </div>
        <LineChart time={activeTime} />
      </div>
    </div>
  );
};

const PurchaseCard = () => {
  return (
    <div className="purchase_wrapper">
      <div className="btc_card buy_btc">
        <CurrencyDollarIcon />
        <p>Buy BTC</p>
      </div>
      <div className="btc_card sell_btc">
        <CurrencyDollarIcon />
        <p>Sell BTC</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="phone">
      <StatusBar />
      <AppBar />
      <WalletDetails />
      <Charts />
      <PurchaseCard />
      <BottomNavigationBar />
    </div>
  );
}

export default App;
