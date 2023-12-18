import React from "react";
import Link from "next/link";

function Assets() {
  return (
    <div className="assets">
      <div className="shadow[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg my-4">
        <div className="header p-5 flex w-full items-center justify-between">
          <h2 className="text-lg font-bold">My Assets</h2>
          <Link href="dashboard/deposits">
            <div>
              <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500 rounded-full py-3 px-5 text-white font-bold text-xs md:text-sm">
                Deposit
              </button>
            </div>
          </Link>
        </div>
        <div>
          <div style={{ width: "100%", height: 660 }}>
            <iframe
              scrolling="no"
              allowtransparency="true"
              frameborder="0"
              src="https://www.tradingview-widget.com/embed-widget/market-overview/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22dateRange%22%3A%2212M%22%2C%22showChart%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22width%22%3A%22100%25%22%2C%22height%22%3A660%2C%22plotLineColorGrowing%22%3A%22rgba(25%2C%20118%2C%20210%2C%201)%22%2C%22plotLineColorFalling%22%3A%22rgba(25%2C%20118%2C%20210%2C%201)%22%2C%22gridLineColor%22%3A%22rgba(42%2C%2046%2C%2057%2C%201)%22%2C%22scaleFontColor%22%3A%22rgba(120%2C%20123%2C%20134%2C%201)%22%2C%22belowLineFillColorGrowing%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22belowLineFillColorFalling%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22symbolActiveColor%22%3A%22rgba(33%2C%20150%2C%20243%2C%200.12)%22%2C%22showFloatingTooltip%22%3Atrue%2C%22tabs%22%3A%5B%7B%22title%22%3A%22Your%20Assets%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CME_MINI%3AES1!%22%2C%22d%22%3A%22S%26P%20500%22%7D%2C%7B%22s%22%3A%22CME%3A6E1!%22%2C%22d%22%3A%22Euro%22%7D%2C%7B%22s%22%3A%22COMEX%3AGC1!%22%2C%22d%22%3A%22Gold%22%7D%2C%7B%22s%22%3A%22NYMEX%3ACL1!%22%2C%22d%22%3A%22Crude%20Oil%22%7D%2C%7B%22s%22%3A%22NYMEX%3ANG1!%22%2C%22d%22%3A%22Natural%20Gas%22%7D%2C%7B%22s%22%3A%22CBOT%3AZC1!%22%2C%22d%22%3A%22Corn%22%7D%5D%2C%22originalTitle%22%3A%22Futures%22%7D%2C%7B%22title%22%3A%22Bonds%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22CBOT%3AZB1!%22%2C%22d%22%3A%22T-Bond%22%7D%2C%7B%22s%22%3A%22CBOT%3AUB1!%22%2C%22d%22%3A%22Ultra%20T-Bond%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBL1!%22%2C%22d%22%3A%22Euro%20Bund%22%7D%2C%7B%22s%22%3A%22EUREX%3AFBTP1!%22%2C%22d%22%3A%22Euro%20BTP%22%7D%2C%7B%22s%22%3A%22EUREX%3AFGBM1!%22%2C%22d%22%3A%22Euro%20BOBL%22%7D%5D%2C%22originalTitle%22%3A%22Bonds%22%7D%2C%7B%22title%22%3A%22Forex%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22FX%3AEURUSD%22%2C%22d%22%3A%22EUR%20to%20USD%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%2C%22d%22%3A%22GBP%20to%20USD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDJPY%22%2C%22d%22%3A%22USD%20to%20JPY%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCHF%22%2C%22d%22%3A%22USD%20to%20CHF%22%7D%2C%7B%22s%22%3A%22FX%3AAUDUSD%22%2C%22d%22%3A%22AUD%20to%20USD%22%7D%2C%7B%22s%22%3A%22FX%3AUSDCAD%22%2C%22d%22%3A%22USD%20to%20CAD%22%7D%5D%2C%22originalTitle%22%3A%22Forex%22%7D%2C%7B%22title%22%3A%22Futures%22%2C%22symbols%22%3A%5B%7B%22s%22%3A%22BINANCE%3ABTCUSDT%22%7D%2C%7B%22s%22%3A%22BINANCE%3AMATICUSDT%22%7D%2C%7B%22s%22%3A%22FX%3AGBPUSD%22%7D%2C%7B%22s%22%3A%22NASDAQ%3ATSLA%22%7D%2C%7B%22s%22%3A%22NASDAQ%3AAAPL%22%7D%5D%7D%5D%2C%22utm_source%22%3A%22livemarkets.vercel.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22market-overview%22%2C%22page-uri%22%3A%22livemarkets.vercel.app%2Fdashboard%22%7D"
              title="market overview TradingView widget"
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
      <div className="my-2">
        <div className="mb-3 shadow[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
          <div className="flex"></div>
          <div>
            <div style={{ width: "100%", height: 72 }}>
              <iframe
                scrolling="no"
                allowtransparency="true"
                frameborder="0"
                src="https://www.tradingview-widget.com/embed-widget/tickers/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22symbols%22%3A%5B%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%20to%20USD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A72%2C%22utm_source%22%3A%22livemarkets.vercel.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%2C%22page-uri%22%3A%22livemarkets.vercel.app%2Fdashboard%22%7D"
                title="tickers TradingView widget"
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
        <div className="mb-3 md:hidden shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
          <div>
            <div style={{ width: "100%", height: 72 }}>
              <iframe
                scrolling="no"
                allowtransparency="true"
                frameborder="0"
                src="https://www.tradingview-widget.com/embed-widget/tickers/?locale=en#%7B%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Atrue%2C%22showSymbolLogo%22%3Atrue%2C%22symbols%22%3A%5B%7B%22proName%22%3A%22FOREXCOM%3ASPXUSD%22%2C%22title%22%3A%22S%26P%20500%22%7D%2C%7B%22proName%22%3A%22FOREXCOM%3ANSXUSD%22%2C%22title%22%3A%22US%20100%22%7D%2C%7B%22proName%22%3A%22FX_IDC%3AEURUSD%22%2C%22title%22%3A%22EUR%20to%20USD%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22title%22%3A%22Bitcoin%22%7D%2C%7B%22proName%22%3A%22BITSTAMP%3AETHUSD%22%2C%22title%22%3A%22Ethereum%22%7D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A72%2C%22utm_source%22%3A%22livemarkets.vercel.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22tickers%22%2C%22page-uri%22%3A%22livemarkets.vercel.app%2Fdashboard%22%7D"
                title="tickers TradingView widget"
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
      </div>
      <div className="shadow[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-lg">
        <div className="header p-5 flex w-full items-center justify-between">
          <h2 className="text-lg font-bold">Trendy Stock Markets</h2>
          <Link href="dashboard/deposits">
            <div>
              <button className="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500 rounded-full py-3 px-5 text-white font-bold text-xs md:text-sm">
                Deposit
              </button>
            </div>
          </Link>
        </div>
        <div id="symbol-overview-widget-container">
          <iframe
            title="symbol overview TradingView widget"
            lang="en"
            id="tradingview_b216f"
            frameborder="0"
            allowtransparency="true"
            scrolling="no"
            src="https://s.tradingview.com/embed-widget/symbol-overview/?locale=en#%7B%22symbols%22%3A%5B%5B%22Apple%22%2C%22AAPL%7C1M%22%5D%2C%5B%22Google%22%2C%22GOOGL%7C1D%22%5D%2C%5B%22Microsoft%22%2C%22MSFT%7C1D%22%5D%2C%5B%22BINANCE%3ARNDRUSDT%7C1D%22%5D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22500px%22%2C%22colorTheme%22%3A%22light%22%2C%22gridLineColor%22%3A%22%232A2E39%22%2C%22fontColor%22%3A%22%23787B86%22%2C%22scalePosition%22%3A%22right%22%2C%22scaleMode%22%3A%22Normal%22%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22%231976D2%22%2C%22topColor%22%3A%22rgba(55%2C%20166%2C%20239%2C%200.15)%22%2C%22fontFamily%22%3A%22-apple-system%2C%20BlinkMacSystemFont%2C%20Trebuchet%20MS%2C%20Roboto%2C%20Ubuntu%2C%20sans-serif%22%2C%22fontSize%22%3A%2210%22%2C%22valuesTracking%22%3A%221%22%2C%22changeMode%22%3A%22price-and-percent%22%2C%22lineWidth%22%3A2%2C%22isTransparent%22%3Atrue%2C%22maLineColor%22%3A%22%232962FF%22%2C%22maLineWidth%22%3A1%2C%22maLength%22%3A9%2C%22page-uri%22%3A%22livemarkets.vercel.app%2Fdashboard%22%2C%22utm_source%22%3A%22livemarkets.vercel.app%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D"
            style={{
              margin: "0px !important",
              padding: "0px !important",
              width: "100%",
              height: 500,
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Assets;
