import { favoritesTypes } from "../types/favorites.tyles";

const initialState = {
  favoritesList: [],
};

export const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case favoritesTypes.ADD:
      return {
        ...state,
        favoritesList: [...state.favoritesList, action.payload],
      };
    case favoritesTypes.REMOVE:
      return {
        ...state,
        favoritesList: state.favoritesList.filter(({ id }) => id !== action.payload),
      };
    case favoritesTypes.SET:
      return {
        ...state,
        favoritesList: action.payload,
      };
    default:
      return state;
  }
};
