import React, { useState, useContext, useEffect } from "react"
import { HeaderContext, HeaderContextType } from "./context/HeaderContext"
import type CSS from "csstype"

type HeaderContainerProps = {
  children: React.ReactNode
}

const HeaderContainerStyle: CSS.Properties = {
  position: "absolute",
  height: "100px",
  width: "66%",
  left: "16.6%",
  top: "15%",
  borderRadius: "50px",
}

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  const { date, isRed, hadleIsRedChange } = useContext(
    HeaderContext
  ) as HeaderContextType
  const [colorChangeTime, setColorChangeTime] = useState<Date>(date)

  useEffect(() => {
    if (date.getTime() - colorChangeTime.getTime() >= 1000) {
      setColorChangeTime(date)
      hadleIsRedChange()
    }
  }, [date])

  return (
    <div
      style={{
        ...HeaderContainerStyle,
        backgroundColor: isRed ? "red" : "blue",
      }}
    >
      {children}
    </div>
  )
}

export default HeaderContainer
