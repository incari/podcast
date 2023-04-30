import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Podcast } from "./pages/Podcast";
import { Episode } from "./pages/Episode";

function App() {
  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home />}
      />
      <Route
        path={"/:id"}
        element={<Podcast />}
      />
      <Route
        path={"/:id:id"}
        element={<Episode />}
      />
    </Routes>
  );
}

export default App;
