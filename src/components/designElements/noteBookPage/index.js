import React from 'react'


export const NoteBookPage = ({style,children}) => {
  const pageStyle = {
    transform: "rotate(1deg)",
    borderRadius: "1px 3px 3px 0px",
    height: "70vw",
    width: "66vw",
    ...style,
  }
  return (
    <div className='paper noteBookPage' style={pageStyle}>{children}</div>
  )
}

NoteBookPage.defaultProps={
  style:{}
}