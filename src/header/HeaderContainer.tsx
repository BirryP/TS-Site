import React, { useState, useContext, useEffect } from "react"
import { HeaderContext, HeaderContextType } from "./context/HeaderContext"
import { Colors } from "../Constants/colors"
import type CSS from "csstype"

type HeaderContainerProps = {
  children: React.ReactNode
}

const HeaderContainerStyle: CSS.Properties = {
  position: "absolute",
  height: "100px",
  width: "98%",
  left: "1%",
  top: "1%",
  borderRadius: "50px",
}

const HeaderContainer = ({ children }: HeaderContainerProps) => {
  const { date, colorIndex, handleColorIndexChange } = useContext(
    HeaderContext
  ) as HeaderContextType
  const [colorChangeTime, setColorChangeTime] = useState<Date>(date)

  useEffect(() => {
    if (date.getTime() - colorChangeTime.getTime() >= 1000) {
      setColorChangeTime(date)
      if (colorIndex < Colors.length -1) {
        handleColorIndexChange(colorIndex + 1);
      } else {
        handleColorIndexChange(0)
      }
      console.log(colorIndex, Colors.length)
    }
  }, [date])

  return (
    <div
      style={{
        ...HeaderContainerStyle,
        backgroundColor: Colors[colorIndex],
      }}
    >
      {children}
    </div>
  )
}

export default HeaderContainer
