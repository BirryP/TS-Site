import React, { useState } from "react"
import Header from "./Header"
import HeaderContainer from "./HeaderContainer"
import { HeaderContext } from "./context/HeaderContext"

const HeaderManager = () => {
  const [date, setDate] = useState<Date>(new Date())
  const [isRed, setIsRed] = useState<boolean>(true)

  const hadleIsRedChange = () => {
    setIsRed((prev) => !prev)
  }

  return (
    <HeaderContext.Provider value={{ date, setDate, isRed, hadleIsRedChange }}>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
    </HeaderContext.Provider>
  )
}

export default HeaderManager
