import { createContext } from "react"

export interface HeaderContextType {
  date: Date
  setDate: (date: Date) => void
  isRed: boolean
  hadleIsRedChange: () => void
}

export const HeaderContext = createContext<HeaderContextType | null>(null)
