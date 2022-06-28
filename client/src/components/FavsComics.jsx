import Scroll from "./Scroll"
import Card from './Card'
import Button from "./Button";

import { handleAddFavs, handleRemoveFavs } from "../handlers"
import s from "./FavsComics.module.css"

function FavsComics({ favsComics, dispatch, navigate }) {

  return (
    <>
      <main className={s.container}>
        <Button navigate={navigate} to={-1} text={"Go back"} />
        <h1 className={s.title}>Favorite Comics</h1>
        <Scroll>
          <div className={s.cards}>
            {favsComics.length
              ? favsComics.map((comic) => {
                return < Card
                  key={comic._id}
                  comic={comic}
                  isGrid={true}
                  handleAddFavs={handleAddFavs}
                  handleRemoveFavs={handleRemoveFavs}
                  dispatch={dispatch}
                  favsComics={favsComics}
                />
              })
              : <h1 className={s.subtitle}>There aren't favorited comics</h1>}
          </div>
        </Scroll>
      </main>
    </>
  )
}

export default FavsComics
