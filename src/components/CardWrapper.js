"use client"

import { useEffect, useState } from "react"

export default function CardWrapper({children}) {
const [color, setColor] = useState('red')

  useEffect(() => {
    const nextColor = color === 'red' ? 'blue' : 'red'
    setTimeout(() => setColor(nextColor), 1000);
  }, [color])

  return (
    <div style={{minWidth:200, minHeight:200, backgroundColor:color}} >
      {children}
    </div>
  )
}
