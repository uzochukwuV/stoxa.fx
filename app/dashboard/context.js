import { createContext } from "react";

export const userAccountContext = createContext({user:null, account:null });



import { create } from 'zustand'

export const useStore = create((set) => ({
  user: {name:'versetile'},
  account : {},
  setUser: (param) => set((state) => ({ user: param })),
  setAccount: (param) => set({ account: param }),
}))