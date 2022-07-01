import React, { useContext, useEffect } from "react"
import { HeaderContext, HeaderContextType } from "./context/HeaderContext"
import TextBox from "./TextBox"

const Header = () => {
  const { date, setDate, colorIndex } = useContext(
    HeaderContext
  ) as HeaderContextType

  useEffect(() => {
    const setDateInterval = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(setDateInterval)
    }
  })

  return (
    <>
      <TextBox text={colorIndex % 2 == 0 ? "Hello There" : "How Are You?"} left="15%" />
      <TextBox
        text={
          date.getHours().toString().padStart(2, "0") +
          ":" +
          date.getMinutes().toString().padStart(2, "0") +
          ":" +
          date.getSeconds().toString().padStart(2, "0")
        }
        left="65%"
      />
    </>
  )
}

export default Header
