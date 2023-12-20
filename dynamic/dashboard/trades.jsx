import React from "react";

function Trades() {
  return (
    <div className="trades pt-6">
      <div className="text mt-3 mb-3 text-lg font-bold">Latest Trades</div>
      <div className="mt-3 pb-2">
        <div className="rounded overflow-hidden relative">
          <div className="w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-none rounded-sm bg-black/5">
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black/80 font-bold">
                    Asset
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black/80 font-bold">
                    Amount
                  </th>
                  <th className="h-12 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 px-1 text-black/80 font-bold">
                    Duration
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black/80 font-bold">
                    Type
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Entry Price
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Lot Size
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Stop Loss
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Take Profit
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black/80 font-bold">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-none cursor-pointer">
                  <td
                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-bold text-center"
                    colSpan="9"
                  >
                    No stakings yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trades;
