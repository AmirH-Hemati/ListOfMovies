import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slider.css";
function Slider() {
  return (
    <div className="">
      <div className=" absolute z-10 pt-2 text-white flex flex-row-reverse justify-around w-full  items-center">
        <div className="flex flex-row-reverse ">
          <button className="mx-6  border-2 border-gray-300 rounded-[12px] w-24"> Sign In</button>
          <button className="btn-slider cursor-pointer  "> Buy sub </button>
        </div>
        <div className="w-[50%] flex mr-52 cursor-pointer  ">
          <div className="flex flex-row-reverse mx-4 justify-center items-center hover:text-[red]">
            {" "}
            <span> Home </span>
          </div>
          <div className="flex flex-row-reverse mx-4  justify-center items-center hover:text-[red]">
            {" "}
            <span> Movies </span>
          </div>
          <div className="flex flex-row-reverse mx-4  justify-center items-center hover:text-[red]">
            {" "}
            <span> Categories </span>
          </div>
          <div className="flex flex-row-reverse mx-4  justify-center items-center hover:text-[red]">
            {" "}
            <span> Education </span>
          </div>
          <div className="flex flex-row-reverse mx-4  justify-center items-center hover:text-[red]">
            {" "}
            <span> About Me </span>
          </div>
        </div>
      </div>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[750px]  "
          id="amirzindex"
        >
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1691922749353_IMAGES_SLIDER.jpg?w=1080')]">
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">spider man : across the spider verse</p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  movie fan move to the USA in Cincinnati to be with his only son. He has to shoot a video of himself doing the Rocky Steps
                  in Philadelphia for an impending interview in India, but his son refuses as being busy
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1692540820926_IMAGES_SLIDER.jpg?w=1080')]">
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">Shiv Shastri Balboa</p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  Synopsis. On Earth-65 in New York City, over a year after helping defeat Kingpin with Miles Morales, Gwen Stacy relates
                  her struggle to create relationships with anyone around her...
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes   ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1692508846029_IMAGES_SLIDER.jpg?w=1080')]">
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">Strange Planet </p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  They star a race of cutely bulbous blue aliens who live in a world very like our own but have a hyperliteral take on
                  situations that neatly points up the absurdity of human existence, quotidian situation by quotidian situation ...
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes   ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1692181299218_IMAGES_SLIDER.jpg?w=1080')]">
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">My Lovely Angel</p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  A life-changing story of a man who has lived as a loner his entire life. Jae Shik begins to live together with a child
                  with a hearing-visual disability, as they change each other's lives and try to find a way to communicate. This is the
                  life-changing story of Jae-Shik, who has lived as a loner for his entire life...
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes   ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1692168798640_IMAGES_SLIDER.jpg?w=1080')]">
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">Ladybug CatNoir</p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  Marinette Dupain-Cheng, your average shy, clumsy high-school student is given magical powers, along with her crush, Adrien
                  Agreste. While facing homework, school, bullies and keeping her identity secret, she turns into Ladybug, with her partner
                  Cat Noir...
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes   ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1692100086297_IMAGES_SLIDER.jpg?w=1080')]">
            {" "}
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">The Quake</p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  Synopsis. A year after the rock-slide in Geiranger, geologist Kristian Eikjord is preparing to appear on a talk show, and
                  is hailed as a hero for saving hundreds of lives in the disaster. Three years later. Idun is divorcing him and he is
                  separated from their children, Sondre and Julia...
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes   ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1692085380857_IMAGES_SLIDER.jpg?w=1080')]">
            {" "}
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">The Stellar</p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  Two Indigenous characters have an encounter that sets off a cosmic and environmental connection link to the past and
                  future. Two Indigenous characters have an encounter that sets off a cosmic and environmental connection link to the past
                  and future...
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes   ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="blendMode bg-cover bg-no-repeat	bg-center	bg-[url('https://vod.nobino.ir/vod/SLIDER/2023-8/1692540732992_IMAGES_SLIDER.jpg?w=1080')]">
            {" "}
            <div className="text-white absolute left-[4%] bottom-[25%] ">
              <p className=" text-[30px] font-bold mb-4">Richard Hammond Big</p>
              <div className="w-[600px]">
                <p className=" text-[15px] text-gray-300">
                  Richard Hammond travels around the world exploring how engineers have designed and built some of the planet's largest
                  structures and machines. Richard Hammond travels around the world exploring how engineers have designed and built some of
                  the planet's largest structures and machines...
                </p>
              </div>
              <div className="mt-8">
                <button className="  btn-slider-detailes   ">More Details </button>
                <button className="btn-slider    ">Play Movie </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
