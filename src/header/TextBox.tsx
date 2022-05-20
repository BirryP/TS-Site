import React, { useContext } from "react"
import { HeaderContext, HeaderContextType } from "./context/HeaderContext"
import type CSS from "csstype"

const TitleStyle: CSS.Properties = {
  position: "absolute",
  width: "20%",
  height: "50%",
  top: "25%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Lucida Console",
  borderRadius: "25px",
}

type TextBoxProps = {
  text: string
  left: string
}

const TextBox = ({ text, left }: TextBoxProps) => {
  const { isRed } = useContext(HeaderContext) as HeaderContextType
  return (
    <div
      style={{ ...TitleStyle, left, backgroundColor: isRed ? "blue" : "red" }}
    >
      <span>{text}</span>
    </div>
  )
}

export default TextBox
