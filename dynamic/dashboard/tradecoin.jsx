import React from "react";

function Tradecoin() {
  return (
    <div className="card mt-5 rounded-lg shadow[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="header p-5">
        <h2 className="text-lg font-bold">Tradable Coins</h2>
      </div>
      <div>
        <div style={{ width: "100%", height: 490 }}>
          <iframe
            allowtransparency="true"
            frameborder="0"
            src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A490%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22livemarkets.vercel.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22livemarkets.vercel.app%2Fdashboard%22%7D"
            title="crypto mkt-screener TradingView widget"
            lang="en"
            style={{
              userSelect: "none",
              boxSizing: "border-box",
              display: "block",
              height: "100%",
              width: "100%",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Tradecoin;
