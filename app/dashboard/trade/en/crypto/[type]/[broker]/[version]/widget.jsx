'use client'
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from 'react';
function TradingViewWidget({props}) {
    const container = useRef();
    let params = props;
  
    useEffect(
      () => {
          
        const script = document.createElement("script");
        
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
          {
            "symbols": [
              [
                "${params.broker}:${params.type}USDT|1D"
              ]
            ],
            "chartOnly": false,
            "width": 1000,
            "height": 500,
            "locale": "en",
            "colorTheme": "light",
            "autosize": false,
            "showVolume": false,
            "showMA": true,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 9,
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
              
              "1m|30",
              "3m|60",
              "12m|1D",
              "60m|1W"
            ]
          }`;
        container.current.appendChild(script);
        
      },
      []
    );
  
    return (
      <>
      {/* <TradingViewInfo props={params} /> */}
      <div className="tradingview-widget-container bg-gray-100 " ref={container} style={{height:500, overflow:'hidden'}}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
      </div>
      </>
    );
  }
  
export default TradingViewWidget;
  

function TradingViewInfo({props}) {
    const container2 = useRef();
    let params = props
    
    console.log(params);
    useEffect(
      () => {
          
        const scriptjs = document.createElement("script");
        
        scriptjs.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
        scriptjs.type = "text/javascript";
        scriptjs.async = true;
        scriptjs.innerHTML = `
          {
            "symbol":"BINANCE:BTCUSDT",
            "width": 1000,
            "locale": "en",
            "colorTheme": "light",
            "isTransparent": false,

          }`;
        container2.current.appendChild(scriptjs);
        
      },
      []
    );
  
    return (
      <div className="tradingview-widget-container bg-gray-100 " ref={container2}>
        <div className="tradingview-widget-container__widget"></div>
<br></br>
      </div>
    );
  }

