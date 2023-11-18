function MovieRotate({ img, title, genres, country, year, Plot }) {
  return (
    <div className="">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front ">
            <img className=" object-cover w-full " src={img} />
          </div>
          <div className="flip-card-back">
            <div className="card-content">
              <h2>{title}</h2>
              <span>{genres}</span>
              <span>
                {year} / {country}{" "}
              </span>

              <p> {Plot}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieRotate;
