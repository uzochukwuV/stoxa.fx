import React from 'react'

function AccountSetting() {
  return (
    <div className="p-4">
  <div
    className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-xl p-5"
  >
    <h2 className="text-xl font-bold mb-6">Settings</h2>
    <form className="text-sm">
      <label
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mb-2 font-bold"
        for="currentPassword"
        >Current Password</label
      ><input
        className="flex h-10 border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-3 text-sm rounded-md placeholder:text-muted-foreground font-bold bg-gray-50 border"
        id="currentPassword"
        placeholder="Current password"
        type="password"
        value=""
        name="currentPassword"
      /><label
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mt-4 mb-2 font-bold"
        for="newPassword"
        >New Password</label
      ><input
        className="flex h-10 border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-3 text-sm rounded-md placeholder:text-muted-foreground font-bold bg-gray-50 border"
        id="newPassword"
        placeholder="New password"
        type="password"
        value=""
        name="newPassword"
      /><label
        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block mt-4 mb-2 font-bold"
        for="confirmPassword"
        >Confirm Password</label
      ><input
        className="flex h-10 border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 w-full px-4 py-3 text-sm rounded-md placeholder:text-muted-foreground font-bold bg-gray-50 border"
        id="confirmPassword"
        placeholder="Current New password"
        type="password"
        value=""
        name="confirmPassword"
      /><button
        disabled=""
        type="submit"
        className="w-full px-4 py-3 cursor-pointer mt-4 text-sm rounded-lg bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-800 via-blue-600 to-blue-500 text-white font-bold focus:outline-none"
      >
        Save Changes
      </button>
    </form>
    <div
      className="message border border-blue-600 text-blue-600 rounded-md p-3 mt-4 text-sm bg-blue-50"
    >
      <article>
        <b className="font-bold">Note:</b> You're not able to change your password
        until after 15 days of account creation. We already employ advanced
        security measures so your account is safe with us
      </article>
    </div>
  </div>
</div>

  )
}

export default AccountSetting