import { Route, Routes } from "react-router";
import "./App.css";
import Movies from "./components/Movies";
import MoviePage from "./components/MoviePage";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./components/loading/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" Component={Movies} />
          <Route path="/movies/:id" Component={Movies} />
          <Route path="/moviePage/:idPage" Component={MoviePage} />
        </Routes>
      )}
    </div>
  );
}

export default App;
