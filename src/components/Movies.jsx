/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "./Movies.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

import { Pagination } from "@mui/material";
import MoveisPop from "./FilmCard/MoveisPop/MoveisPop";
import Rest from "./Rest/Rest";
import Myth from "./FilmCard/Myth/Myth";
import MoviesMainCard from "./FilmCard/MoviesMain/MoviesMainCard";
import SidebarLeft from "./Sidebar/SidebarLeft/SidebarLeft";
import Slider from "./Slider/Slider";
import Loading from "./loading/Loading";

function Movies() {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(
    function () {
      setIsLoading(true);
      axios.get(`https://moviesapi.ir/api/v1/movies?page=${params.id}`).then(function (res) {
        setMoviesData(res.data.data);
        setCount(res.data.metaDat);
        setIsLoading(false);
      });
    },
    [params]
  );
  function handelcount(event, value) {
    navigate(`/movies/${value}`);
  }

  return (
    <div className=" bg-[#111111]  ">
      <div className="">
        <div>
          <Slider />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="mt-10">
        <MoveisPop />
      </div>
      <br />
      <br />
      <br />
      <div className="border-slider-rest"></div>
      <br />
      <br />
      <br />
      <div>
        <Myth />
      </div>
      <br />
      <br />
      <br />

      <div className="border-slider-rest"></div>
      <br />
      <br />
      <br />
      <br />
      <div className="text-white">
        <Rest />
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex justify-between ">
          <div className="text-white w-[15%] ">
            <SidebarLeft />
          </div>
          <div className="w-[85%] flex flex-col items-center">
            {moviesData.map((moveiData) => {
              return <MoviesMainCard moveiData={moveiData} />;
            })}
            <Pagination count={count} onChange={handelcount} />
          </div>
        </div>
      )}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Movies;
