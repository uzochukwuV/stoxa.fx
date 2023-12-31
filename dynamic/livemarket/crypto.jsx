import React from "react";
import Image from "next/image";
import Link from "next/link";

function Crypto() {
  return (
    <div className="rounded-xl overflow-hidden relative">
      <div className="w-full overflow-auto">
        <table className="w-full caption-bottom text-sm">
          <thead className="[&amp;_tr]:border-b">
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none rounded-md bg-color-change  font-bold text-color-change  hover:bg-white/5">
              <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:flex md:items-center text-color-change /80 font-bold">
                ID
              </th>
              <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-color-change /80 font-bold">
                Asset
              </th>
              <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 hidden md:flex md:items-center text-color-change /80 font-bold">
                Name
              </th>
              <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-color-change font-bold">
                Value
              </th>
              <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-color-change font-bold">
                Current Price
              </th>
              <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-color-change font-bold"></th>
            </tr>
          </thead>
          <tbody className="[&amp;_tr:last-child]:border-0">
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>1</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/DOGE.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">DOGE</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Dogecoin
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 DOGE
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.072428
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/DOGE/KRAKEN/0.072428">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>2</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/APE.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">APE</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                ApeCoin
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 APE
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $1.35
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/APE/KRAKEN/1.35">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>3</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/AAVE.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">AAVE</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                AAVE
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 AAVE
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $85.01
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/AAVE/BINANCE/85.01">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>4</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/STEP.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">STEP</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Step Finance
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 STEP
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.02917731
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/STEP/KRAKEN/0.02917731">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>5</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/WXT.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">WXT</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Wirex
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 WXT
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.00498941
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/WXT/OKX/0.00498941">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>6</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="assets/markets/crypto/VET.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">VET</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Vechain
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 VET
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.01945072
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/VET/BINANCE/0.01945072">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>7</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/RARI.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">RARI</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Rarible
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 RARI
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $1.17
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/RARI/KRAKEN/1.17">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>8</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/ETC.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">ETC</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Ethereum Classic
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 ETC
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $18.21
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/ETC/KRAKEN/18.21">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>9</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/ALGO.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">ALGO</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Algorand
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 ALGO
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.124829
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/ALGO/KRAKEN/0.124829">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>10</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/XLM.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">XLM</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Stellar
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 XLM
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.113919
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/XLM/KRAKEN/0.113919">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>11</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/AURORA.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">AURORA</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Aurora
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 AURORA
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.0001289
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/AURORA/CRYPTO/0.0001289">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>12</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/ETH.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">ETH</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Ethereum
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 ETH
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $1945.71
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/ETH/KRAKEN/1945.71">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>13</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/GT.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">GT</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Gate
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 GT
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.00015541
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/GT/CRYPTO/0.00015541">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>14</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/XMR.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">XMR</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Monero
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 XMR
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $159.31
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/XMR/KRAKEN/159.31">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>15</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/DASH.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">DASH</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Dash
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 DASH
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $28.43
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/DASH/KRAKEN/28.43">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>16</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/XTZ.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">XTZ</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Tezos
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 XTZ
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.774949
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/XTZ/KRAKEN/0.774949">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>17</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/DOT.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">DOT</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Polkadot
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 DOT
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $4.89
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/DOT/KRAKEN/4.89">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>18</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/XPR.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">XPR</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Proton
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 XPR
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.00088201
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/XPR/CRYPTO/0.00088201">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>19</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/MANA.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">MANA</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Decentraland
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 MANA
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.380777
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/MANA/KRAKEN/0.380777">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>20</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/DAI.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">DAI</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Dai
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 DAI
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $1
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/DAI/KRAKEN/1">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>21</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/OP.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">OP</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Optimism
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 OP
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $1.61
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/OP/KRAKEN/1.61">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>22</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/TRX.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">TRX</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Tron
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 TRX
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.09599
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/TRX/KRAKEN/0.09599">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>23</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/SHIB.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">SHIB</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Shiba Inu
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 SHIB
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.00000779
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/SHIB/KRAKEN/0.00000779">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>24</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/GO.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">GO</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                GoChain
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 GO
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.00435468
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/GO/BITTREX/0.00435468">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>25</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/LTC.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">LTC</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Litecoin
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 LTC
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $66.45
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/LTC/KRAKEN/66.45">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>26</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/BTC.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">BTC</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Bitcoin
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 BTC
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $36143
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/BTC/KRAKEN/36143">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>27</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/CRO.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">CRO</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Cronos
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 CRO
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.00010174
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/CRO/BITTREX/0.00010174">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>28</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/EVMOS.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">EVMOS</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Evmos
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 EVMOS
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.075258
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/EVMOS/PYTH/0.075258">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>29</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/ADA.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">ADA</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Cardano
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 ADA
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.360173
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/ADA/KRAKEN/0.360173">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>30</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/WING.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">WING</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Wing Finance
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 WING
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $6
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/WING/CRYPTO/6">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>31</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/OKB.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">OKB</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                OKB
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 OKB
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $56.45
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/OKB/CRYPTO/56.45">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>32</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/TLOS.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">TLOS</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Telos
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 TLOS
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.093763
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/TLOS/BITFINEX/0.093763">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>33</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/ZEC.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">ZEC</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Zcash
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 ZEC
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $27.28
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/ZEC/KRAKEN/27.28">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>34</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/ANC.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">ANC</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Anchor Protocol
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 ANC
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.01079773
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/ANC/PYTH/0.01079773">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>35</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/SFP.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">SFP</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Safepal
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 SFP
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.621482
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/SFP/CRYPTO/0.621482">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>36</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/AXS.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">AXS</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Axie Infinity
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 AXS
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $5.56
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/AXS/KRAKEN/5.56">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>37</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/GRT.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">GRT</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                The Graph
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 GRT
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.12691
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/GRT/KRAKEN/0.12691">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>38</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/GMT.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">GMT</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Stepn
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 GMT
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.257834
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/GMT/KRAKEN/0.257834">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>39</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/SOL.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">SOL</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Solana
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 SOL
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $52.18
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/SOL/KRAKEN/52.18">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>40</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/XCN.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">XCN</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Chain
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 XCN
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $109.44
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/XCN/KRAKEN/109.44">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>41</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/SUSHI.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">SUSHI</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Sushi
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 SUSHI
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.942945
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/SUSHI/KRAKEN/0.942945">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>42</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/LINK.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">LINK</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                ChainLink
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 LINK
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $13.56
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/LINK/KRAKEN/13.56">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>43</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/NEXO.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">NEXO</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Nexo
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 NEXO
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.723174
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/NEXO/CRYPTO/0.723174">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>44</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/UNI.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">UNI</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Uniswap
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 UNI
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $4.91
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/UNI/KRAKEN/4.91">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>45</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/OGN.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">OGN</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Origin Protocol
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 OGN
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.11075
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/OGN/KRAKEN/0.11075">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>46</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/USDT.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">USDT</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Tether
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 USDT
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $1.001
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/USDT/KRAKEN/1.001">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>47</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/ORN.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">ORN</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Orion Protocol
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 ORN
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.595522
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/ORN/CRYPTO/0.595522">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>48</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/USDC.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">USDC</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                USD Coin
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 USDC
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $0.997779
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/USDC/KRAKEN/0.997779">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
            <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none cursor-pointer bg-color-change[#111] font-bold text-color-change  hover:bg-white/5">
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold hidden md:flex md:items-center">
                <div>49</div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm">
                <div className="flex items-center gap-x-2 text-color-change /80">
                  <div className="crypto-image">
                    <Image
                      alt=""
                      loading="lazy"
                      width="1000"
                      height="1000"
                      decoding="async"
                      data-nimg="1"
                      className="w-6 h-6"
                      src="/assets/markets/crypto/BCH.svg"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="crypto-name font-bold">BCH</div>
                </div>
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm hidden md:flex md:items-center text-color-change /80">
                Bitcoin Cash
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-sm text-color-change /80">
                0.00 BCH
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-sm text-color-change /80">
                $216.45
              </td>
              <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                <Link href="/dashboard/trade/en/crypto/BCH/KRAKEN/216.45">
                  <button className="px-3 py-2 bg-green-600/10 text-green-600 rounded-sm text-sm">
                    Trade
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crypto;
