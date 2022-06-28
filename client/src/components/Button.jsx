import React from 'react'
import s from './Button.module.css'

function Button({ navigate, to, text }) {
  return (
    <button className={s.back} onClick={() => navigate(to)}>{text}</button>
  )
}

export default Button