import React from 'react'
import Script from 'next/script'

function TradingView() {
  return (
    <section className="relative w-full h-auto">
    <div className="w-full">
      <div className="tradingview-widget-container w-full">
        <div>
          {/* <Script
          id='tradingView'
            src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
            async=""
            type="text/javascript"
          >
           
          </Script> */}

          
        </div>
      </div>
    </div>
  </section>
  )
}

export default TradingView;