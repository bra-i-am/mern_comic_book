import { SET_FAVCOMICS, REMOVE_FAVCOMICS } from "./ActionTypes";

/** Favorited Comics */
export function addFavoriteComic(comic) {
  return {
    type: SET_FAVCOMICS,
    payload: comic,
  };
}

export function removeFavoriteComic(comic) {
  return {
    type: REMOVE_FAVCOMICS,
    payload: comic,
  };
}
