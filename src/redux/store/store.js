import { createStore, combineReducers } from "redux";
import { favoritesReducer } from "../reducers/favorites.reducer";

const saveToLocalStorage = (state) => {
  const listReducer = state.favorites.favoritesList;
  localStorage.favorites = JSON.stringify(listReducer);
};

const reducers = combineReducers({
  favorites: favoritesReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveToLocalStorage(store.getState()));
