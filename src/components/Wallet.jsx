import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

import IconButton from "@/components/IconButton";
import BitcoinIcon from "@/assets/bitcoin-icon.png";

const WalletDetails = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="card_container wallet_wrapper">
      <div className="wallet_title_wrapper">
        <figure>
          <img src={BitcoinIcon} alt="Bit coin logo" />
          <figcaption>Bitcoin</figcaption>
        </figure>
        <span>BTC</span>
      </div>
      <h1>3.529020 BTC</h1>

      <div className="usd_price_desc">
        <span>$19.153 USD</span>
        <div className="alert">- 2.32%</div>
      </div>
      {showMore ? (
        <>
          <div className="button_group">
            <button className="sell_btn">Sell BTC</button>
            <button className="buy_btn">Buy BTC</button>
          </div>

          <IconButton onClick={() => setShowMore(false)}>
            <ChevronUpIcon className="up_arrow" />
          </IconButton>
        </>
      ) : (
        <>
          <IconButton onClick={() => setShowMore(true)}>
            <ChevronDownIcon className="down_arrow" />
          </IconButton>
        </>
      )}
    </div>
  );
};

export default WalletDetails;
