import { addFavoriteComic, removeFavoriteComic } from "../redux/actions";

export const handleView = (isGrid, setIsGrid) => {
  setIsGrid(!isGrid);
};

export const handleResize = (setIsGrid, setShowOptions) => {
  if (window.screen.width < 650) {
    setIsGrid(true);
    setShowOptions(false);
  } else {
    setShowOptions(true);
  }
};

export const handleAddFavs = (event, dispatch, comic) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch(addFavoriteComic(comic));
};

export const handleRemoveFavs = (event, dispatch, comic) => {
  event.preventDefault();
  event.stopPropagation();
  dispatch(removeFavoriteComic(comic));
};
