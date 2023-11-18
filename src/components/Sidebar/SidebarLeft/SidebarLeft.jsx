import { Facebook, Link1, Pointer, Youtube } from "iconsax-react";
import "./SidebarLeft.css";
import SidebarLeftcard from "./SidebarLeftcard";

function SidebarLeft() {
  return (
    <div className="mt-16 flex flex-col justify-center items-center">
      <div className="flex justify-center text-[25px]">
        
        <p>Update movies</p>
      </div>
      <div>
        <SidebarLeftcard img="https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2023/08/The-Uncanny-Counter-mini-Poster.jpg.webp" />
        <SidebarLeftcard img="https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2021/09/Foundation_2021_icon.jpg.webp" />
        <SidebarLeftcard img="https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2023/08/The-Winter-King-2023-mini-Poster.jpg.webp" />
        <SidebarLeftcard img="https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2023/08/Harlan-Cobens-Shelter-2023-mini-Poster.jpg.webp" />

        <SidebarLeftcard img="https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2023/08/My-Dearest-2023-mini-Poster.jpg.webp" />
        <SidebarLeftcard img="https://hexdownload.co/wp-content/webp-express/webp-images/uploads/2023/04/Fofo.Mosaferi.Az_.Kamado.Series.mini_.Poster.jpg.webp" />
      </div>
    </div>
  );
}

export default SidebarLeft;
