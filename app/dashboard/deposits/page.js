import React from 'react'
import Plans from '@/dynamic/dashboard/plans'
import MarketBoard from '@/dynamic/livemarket/marketboard'
import Crypto from '@/dynamic/deposit/crypto'
import BankWire from '@/dynamic/deposit/bankwire'

function page() {
  return (
    <div>
      <MarketBoard />
        <Plans />
        <Crypto />
        <BankWire />
    </div>
  )
}

export default page