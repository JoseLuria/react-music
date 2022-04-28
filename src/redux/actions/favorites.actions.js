import { favoritesTypes } from "../types/favorites.tyles";

export const addToFavorites = (artist) => {
  return {
    type: favoritesTypes.ADD,
    payload: artist,
  };
};

export const removeFromFavorites = (id) => {
  return {
    type: favoritesTypes.REMOVE,
    payload: id,
  };
};

export const setFavorites = (list) => {
  return {
    type: favoritesTypes.SET,
    payload: list,
  };
};
