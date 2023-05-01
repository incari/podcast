import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Podcast } from "./pages/Podcast";
import { Episode } from "./pages/Episode";
import { useGetPodcastList } from "./api/api";

function App() {
  const { data, isLoading } = useGetPodcastList();

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <Routes>
      <Route
        path={"/"}
        element={<Home data={data} />}
      />
      <Route
        path={"/podcast/:id"}
        element={<Podcast data={data} />}
      />
      <Route
        path={"/podcast/:id/episode/:id"}
        element={<Episode />}
      />
    </Routes>
  );
}

export default App;
