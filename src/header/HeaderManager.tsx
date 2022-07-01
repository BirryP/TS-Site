import React, { useState } from "react"
import Header from "./Header"
import HeaderContainer from "./HeaderContainer"
import { HeaderContext } from "./context/HeaderContext"

const HeaderManager = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [colorIndex, setColorIndex] = useState<number>(0);

  const handleColorIndexChange = (newColorIndex: number) => {
    setColorIndex(newColorIndex);
  };

  return (
    <HeaderContext.Provider value={{ date, setDate, colorIndex, handleColorIndexChange }}>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
    </HeaderContext.Provider>
  )
}

export default HeaderManager
