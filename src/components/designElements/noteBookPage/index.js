import React from 'react'
import "./styles.scss";

export const NoteBookPage = (props) => {
  return (
    <div className='paper'>{props.children}</div>
  )
}

