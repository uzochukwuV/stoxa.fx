import React from "react";

function Verify() {
  return (
    <div className="p-4">
      <div className="p-4 rounded-md border">
        <div className="mb-4 py-3">
          <div className="flex items-center mb-4">
            <div className="text-xl font-bold">ID Verification</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 ml-2 text-green-600"
            >
              <path
                fillRule="evenodd"
                d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <p className="font-bold text-sm">
            Your Personal info/ID for verification will be processed and
            verified
          </p>
        </div>
        <div className="EntryPrice mb-2 mt-1 rounded text-sm bg-black/5 text-black/80">
          <select
            type="button"
            role="combobox"
            aria-controls="radix-:raf:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="flex h-12 w-full items-center justify-between border-input bg-transparent px-3 py-4 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-ring /focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm border-0 font-bold"
          >
            <option style={{ pointerEvents: "none" }}>
              Select a document type
            </option>
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
            <option value='1'>State id</option>
            <option value='2'>SOD</option>
            <option value='3'>ID card</option>
            <option value='4'>Drivers Lincence</option>
          </select>
        </div>
        <div className="flex justify-center items-center font-bold text-lg my-4">
          <p>Please select an a document to upload</p>
        </div>
      </div>
    </div>
  );
}

export default Verify;
