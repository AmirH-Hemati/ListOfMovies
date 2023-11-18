import Mythcard from "./Mythcard";
import "./Myth.css";

function Myth() {
  return (
    <div>
      <div className="text-white text-[25px]  mx-12 my-4 mb-12">Heros</div>

      <div className="flex justify-center items-center">
        <Mythcard img="https://nobino.ir/img/actor1.png" />
        <Mythcard img="https://nobino.ir/img/actor2.png" />
        <Mythcard img="https://nobino.ir/img/actor3.png" />
      </div>
    </div>
  );
}

export default Myth;
