import React from 'react'

export const PageTitle = ({title,style}) => {

    const titleStyle ={
        fontFamily:"alagambe",
        fontSize:"xxx-large",
        textAlign:"center",
        textTransform:"capitalize",
        ...style,
    }
  return (
    <h2 style={titleStyle} className="text">{title}</h2>
  )
}
