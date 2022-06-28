import { useEffect, useState } from 'react'
import axios from 'axios'

import Loader from './Loader';

import s from './SpecificDetail.module.css'

function SpecificDetail({ feature, id }) {
  const [detail, setDetail] = useState({
    name: '',
    image: ''
  });

  useEffect(() => {
    axios(`/${feature}/${id}`).then(({ data }) => setDetail(data)) // eslint-disable-next-line
  }, [])

  return (
    <>
      {detail.name
        ? <div className={s.detail}>
          <img className={s.image} src={detail.image} alt={detail.name} />
          <h3 className={s.name}>{detail.name}</h3>
        </div>
        : <Loader />
      }
    </>
  )
}

export default SpecificDetail