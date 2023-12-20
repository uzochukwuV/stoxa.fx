import React from "react";

function Staking() {
  return (
    <div className="staking pt-6">
      <div className="text mt-3 mb-3 text-lg font-bold">Stakings</div>
      <div className="mt-3 pb-2">
        <div className="rounded-sm overflow-hidden relative">
          <div className="w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border-none rounded-sm bg-black/5">
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Staked Asset
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Staked Amount
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Staked Duration
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Monthly Returns
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap text-black/80 font-bold">
                    Total Returns
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
                    colSpan="8"
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

export default Staking;
