import { Link } from "react-router-dom";
import "./MoviesMain.css";

function MoviesMainCard({ moveiData }) {
  return (
    <div>
      <div className="wrapper">
        <div className="main_card w-[900px] h-[420px] my-[50px]">
          <div className="card_left">
            <div className="card_datails ">
              <h1>
                {moveiData.id} - {moveiData.title}
              </h1>
              <div className="card_cat">
                <p className="Imdb">{moveiData.imdb_rating}</p>
                <p className="year">{moveiData.year}</p>
                <p className="genre">
                  {moveiData.genres[0]} / {moveiData.genres[1]}{" "}
                </p>
                <p className="time">{moveiData.runtime}</p>
              </div>
              <p className="disc">
                <span className="text-red-400">Director </span> : {moveiData.director}
              </p>
              <p className="disc">
                <span className="text-red-400">Imdb-Votes </span> : {moveiData.imdb_votes}
              </p>
              <div className="flex items-center">
              <span className="text-red-400 m-[10px]">Actors </span>:
              <p className="disc bg-[#1C1C22] p-2 text-[14px]"> {moveiData.actors}</p>
              </div>
              <div className="social-btn">
                <Link to={`/moviePage/${moveiData.id}`}>
                  {" "}
                  <button className="button-card-main">See More</button>
                </Link >
              </div>
            </div>
          </div>
          <div className="card_right">
            <div className="img_container">
              <img className="object-cover h-[420px]" src={moveiData.poster} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesMainCard;
