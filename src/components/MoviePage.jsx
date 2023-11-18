import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Loading from "./loading/Loading";
function MoviePage() {
  const [moviePage, setMoviePage] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://moviesapi.ir/api/v1/movies/${params.idPage}`).then((res) => {
      setMoviePage(res.data);
      setIsLoading(false);
    });
  }, [params.idPage]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" w-[100%] h-screen bg-[#111111] flex justify-center items-center">
          <div className="wrapper ">
            <div className="main_card w-[1050px] ">
              <div className="card_left">
                <div className="card_datails">
                  <h1>
                    {moviePage.id} - {moviePage.title}
                  </h1>
                  <div className="card_cat">
                    <p className="Imdb">{moviePage.imdb_rating}</p>
                    <p className="year">{moviePage.year}</p>
                    <p className="year">{moviePage.country}</p>
                    <p className="year">{moviePage.runtime}</p>
                  </div>
                  <div className="">
                    <p className="disc">
                      <span className="text-red-400">Metascore </span> : {moviePage.metascore}
                    </p>
                    <p className="disc">
                      <span className="text-red-400">Imdb-Votes </span> : {moviePage.imdb_votes}
                    </p>
                    <p className="disc">
                      <span className="text-red-400">Released </span> : {moviePage.released}
                    </p>

                    <p className="disc">
                      <span className="text-red-400">Director </span> : {moviePage.director}
                    </p>
                    <p className="disc flex  ">
                      <span className="text-red-400 ">Genres </span> : <p className="mx-3 px-2 bg-[#1C1C22]">{moviePage.genres + ""}</p>
                    </p>

                    <div className="flex items-center ">
                      <span className="text-red-400 m-[10px]">Actors </span>:
                      <p className="disc bg-[#1C1C22] py-2 px-2 text-[14px]"> {moviePage.actors}</p>
                    </div>
                    <div className=" ">
                      <span className="text-red-400 m-[10px] ">Summary </span>:
                      <p className=" bg-[#1C1C22] p-2 my-4 text-[14px]"> {moviePage.plot}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card_right">
                <div className="img_container">
                  <img className="object-cover" src={moviePage.poster} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MoviePage;
