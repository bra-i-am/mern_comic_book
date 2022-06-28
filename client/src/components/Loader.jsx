import React from 'react'
import s from './Loader.module.css'

function Loader() {
  return (
    <div className={s.lds_ripple}><div></div><div></div></div>
  )
}

export default Loader