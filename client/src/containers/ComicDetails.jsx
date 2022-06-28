import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

import SpecificDetail from '../components/SpecificDetail';
import Loader from '../components/Loader';
import Scroll from "../components/Scroll";
import Button from "../components/Button";

import s from './ComicDetails.module.css'

function Comic({ navigate }) {
  const { id } = useParams();
  const [comicDetail, setComicDetail] = useState({
    characters: [],
    location: [],
    team: [],
    name: "",
    image: ""
  });

  window.scroll({
    top: 0
  })

  useEffect(() => {
    axios(`/comics/${id}`).then(({ data }) => setComicDetail(data))
  }, [id]);

  return (
    <main className={s.container}>
      <Button navigate={navigate} to={-1} text={"Go back"} />
      <h1 className={s.title}>{comicDetail.name}</h1>
      {comicDetail.name
        ? <article className={s.main}>
          <img className={s.img} src={comicDetail.image} alt={comicDetail.name} />
          <Scroll>
            <section className={s.info}>
              <div className={s.info_sec}>
                <h2>Characters:</h2>
                <div className={s.detail}>
                  {comicDetail.characters.length
                    ? comicDetail.characters.map((character) => <SpecificDetail key={character.id} id={character.id} feature={'character'} />)
                    : <h3 className={s.warning}>Characters not registered.</h3>}
                </div>
              </div>
              <div className={s.info_sec}>
                <h2>Teams:</h2>
                <div className={s.detail}>
                  {comicDetail.team.length
                    ? comicDetail.team.map((team) => <SpecificDetail key={team.id} id={team.id} feature={'team'} />)
                    : <h3 className={s.warning}>Teams not registered.</h3>}
                </div>
              </div>
              <div className={s.info_sec}>
                <h2>Locations:</h2>
                <div className={s.detail}>
                  {comicDetail.location.length
                    ? comicDetail.location.map((location) => <SpecificDetail key={location.id} id={location.id} feature={'location'} />)
                    : <h3 className={s.warning}>Locations not registered.</h3>}
                </div>
              </div>
            </section>
          </Scroll>
        </article>
        : <Loader />}
    </main>
  )
}

export default Comic