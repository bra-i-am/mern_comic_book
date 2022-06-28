import s from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({
  comic,
  isGrid = true,
  handleAddFavs,
  handleRemoveFavs,
  dispatch,
  favsComics
}) => {

  const { _id, date_added, image, name } = comic
  const isFaved = favsComics?.find((el) => el === comic);

  /** Date config */
  const event = new Date(date_added);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return (
    <>
      <div className={isGrid ? s.card : s.cardList}>
        <Link className={s.link} to={`/comics/${_id}`} >
          <img className={s.img} src={image} alt={name} />
          <div className={s.info}>
            <h2 className={s.name}>{name}</h2>
            <h3 className={s.date}>{event.toLocaleString(undefined, options)}</h3>
          </div>
        </Link>
        {isFaved?._id === _id
          ? <button className={s.button} onClick={(e) => handleRemoveFavs(e, dispatch, comic)}>Remove from favorites</button>
          : <button className={s.button} onClick={(e) => handleAddFavs(e, dispatch, comic)}>Add to favorites</button>
        }
      </div>
      {isGrid ? '' : <hr />}
    </>
  )
}

export default Card;