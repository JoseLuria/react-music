import { useEffect } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Home, Favorites } from "./pages";
import { useDispatch } from "react-redux";
import { setFavorites } from "./redux/actions/favorites.actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.favorites) {
      const favorites = JSON.parse(localStorage.favorites);
      dispatch(setFavorites(favorites));
    } else {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  }, []);

  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
