import React from "react";

function History() {
  return (
    <div>
      <div className="p-4 overflow-x-hidden max-w-[100vw] mt-10">
        <div className="font-bold textsm mb-3 ml-2 text-black-500 border-0 p-4 rounded-md text-blue-accent">
          Select a transaction history
        </div>
        <button
          type="button"
          role="combobox"
          aria-controls="radix-:rv:"
          aria-expanded="false"
          aria-autocomplete="none"
          dir="ltr"
          data-state="closed"
          className="flex h-12 w-full items-center justify-between rounded-md border-input px-3 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-bold text-blue-accent  text-black-500 border-0"
        >
          <span style={{ pointerEvents: "none" }}>All Transactions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 opacity-50"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div className="rounded-xl my-4 py-3 border border-white/10 text-blue-accent">
          <div className="w-full overflow-auto ">
            <table className="w-full caption-bottom text-sm p-0">
              <caption className="mt-4 text-sm text-muted-foreground">
                All History
              </caption>
              <thead className="[&amp;_tr]:border-b border-b border-white/10">
                <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none hover:bg-transparent">
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black-500/80 font-bold">
                    Date Added
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black-500/80 font-bold">
                    Transaction Method
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black-500/80 font-bold">
                    Amount
                  </th>
                  <th className="h-12 px-4 text-left align-middle [&amp;:has([role=checkbox])]:pr-0 text-black-500/80 font-bold">
                    Transaction Status
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="border-b transition-colors data-[state=selected]:bg-muted border-none hover:bg-transparent">
                  <td
                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-center font-bold text-black-500/80"
                    colspan="4"
                  >
                    No all history
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

export default History;
