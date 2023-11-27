"use client"

import React, { createContext, useContext, useState } from 'react'

export const appContext = createContext({})

function AppContext({children}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    // const [first, setfirst] = useState(second)
    // const [first, setfirst] = useState(second)
  return (
    <appContext.Provider value={{sidebarOpen, setSidebarOpen}}>
        {children}
    </appContext.Provider>
    
  )
}

export default AppContext