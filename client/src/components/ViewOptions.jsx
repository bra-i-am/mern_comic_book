import React from 'react'

import GridIcon from './svg/GridIcon'
import ListIcon from './svg/ListIcon'

import s from './ViewOptions.module.css'

function ViewOptions({ isGrid, setIsGrid, handleView, showOptions }) {
  return (
    <>
      {showOptions && <div className={s.options_bar}>
        <h3 className={s.title}>Last issues</h3>
        <div className={s.options}>
          <div className={s.option} onClick={() => handleView(isGrid, setIsGrid)}>
            <ListIcon status={isGrid} />
          </div>
          <div className={s.option} onClick={() => handleView(isGrid, setIsGrid)}>
            <GridIcon status={isGrid} />
          </div>
        </div>
      </div>}
    </>
  )
}

export default ViewOptions