import { useEffect, useState } from 'react'

import Card from "../components/Card"
import ViewOptions from '../components/ViewOptions'
import Loader from '../components/Loader'
import Button from "../components/Button";

import { handleView, handleResize, handleAddFavs, handleRemoveFavs } from "../handlers"

import s from "./Comics.module.css"

function Comic({ comics, favsComics, dispatch, navigate }) {
  const [isGrid, setIsGrid] = useState(true);
  const [showOptions, setShowOptions] = useState(true);

  useEffect(() => {
    if (window.screen.width < 650) {
      setIsGrid(true)
      setShowOptions(false)
    }
  }, [])

  window.addEventListener('resize', () => handleResize(setIsGrid, setShowOptions))

  return (
    <>
      <main className={s.comics_container}>
        <h1 className={s.title}>ComicBook</h1>
        <Button navigate={navigate} to={'/favs'} text={"Favorites"} />
        <ViewOptions isGrid={isGrid} setIsGrid={setIsGrid} handleView={handleView} showOptions={showOptions} />
        {!comics.length
          ? <Loader />
          : <section className={isGrid ? s.comicsGrid : s.comicsList}>
            {
              comics.sort((a, b) => {
                if (a.date_added > b.date_added) return -1;
                if (a.date_added < b.date_added) return 1;
                return 0;
              }).map((comic) =>
                <Card
                  key={comic._id}
                  comic={comic}
                  isGrid={isGrid}
                  handleAddFavs={handleAddFavs}
                  handleRemoveFavs={handleRemoveFavs}
                  dispatch={dispatch}
                  favsComics={favsComics}
                />
              )
            }
          </section>
        }
      </main>
    </>
  )
}

export default Comic
