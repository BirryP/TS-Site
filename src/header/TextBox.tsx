import React, { useContext, useEffect, useState } from "react"
import { HeaderContext, HeaderContextType } from "./context/HeaderContext"
import { Colors } from "../Constants/colors"
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
  const { colorIndex } = useContext(HeaderContext) as HeaderContextType
  const [textBoxColorIndex, setTextBoxColorIndex] = useState<number>(Math.round(Colors.length / 2))

  useEffect(() => {
    const newTextBoxColorIndex = colorIndex + Math.round(Colors.length / 2);
    if (newTextBoxColorIndex > Colors.length - 1) {
      setTextBoxColorIndex(newTextBoxColorIndex - Colors.length);
    } else {
      setTextBoxColorIndex(newTextBoxColorIndex);
    }
  }, [colorIndex])

  return (
    <div
      style={{ ...TitleStyle, left, backgroundColor: Colors[textBoxColorIndex] }}
    >
      <span style={{color: Colors[colorIndex]}}>{text}</span>
    </div>
  )
}

export default TextBox
