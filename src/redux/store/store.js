import { createStore, combineReducers } from "redux";
import { favoritesReducer } from "../reducers/favorites.reducer";

const reducers = combineReducers({
  favorites: favoritesReducer,
});

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
