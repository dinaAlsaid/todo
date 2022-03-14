import React from 'react'
import "./styles.scss";


export const NoteBookPage = (props) => {
  return (
    <div className='paper noteBookPage'>{props.children}</div>
  )
}

