import { createContext } from "react"

export interface HeaderContextType {
  date: Date
  setDate: (date: Date) => void
  colorIndex: number
  handleColorIndexChange: (colorIndex: number) => void
}

export const HeaderContext = createContext<HeaderContextType | null>(null)
