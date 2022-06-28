import { SET_FAVCOMICS, REMOVE_FAVCOMICS } from "../actions/ActionTypes";

export const initialState = {
  favsComics: [],
};

export default function comicsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_FAVCOMICS:
      return {
        ...state,
        favsComics: [...state.favsComics, payload],
      };

    case REMOVE_FAVCOMICS:
      return {
        ...state,
        favsComics: state.favsComics.filter((el) => el !== payload),
      };

    default:
      return state;
  }
}
