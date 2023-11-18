function Mythcard({img}) {
  return (
    <div>
      <div className="cards-list">
        <div className="card ">
          <div className="card_image">
            {" "}
            <img className="object-cover" src={img} />{" "}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Mythcard;
