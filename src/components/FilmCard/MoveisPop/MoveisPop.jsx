import "./MoviesPop.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import MovieRotate from "./MovieRotate";
function MoveisPop() {
  return (
    <div className="text-red h-[500px] bg-[#111111] w-full">
      <div className="text-white text-[25px]  mx-12 my-4 mb-12">Popular Movies</div>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <MovieRotate
            title="The Shawshank Redemption"
            Plot="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
            genres="Crime / Drama"
            country="USA"
            year="1994"
            img="https://moviesapi.ir/images/tt0111161_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="The Godfathe"
            Plot="The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
            genres="Crime / Drama"
            country="USA"
            year="1972"
            img="https://moviesapi.ir/images/tt0068646_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="The Godfather: Part II"
            Plot="The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba"
            genres="Crime / Drama"
            country="USA"
            year="1974"
            img="https://moviesapi.ir/images/tt0071562_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="The Dark Knight"
            Plot="When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice."
            genres="Action / Crime / Drama"
            country="USA , UK"
            year="2008"
            img="https://moviesapi.ir/images/tt0468569_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="12 Angry Men"
            Plot="A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
            genres="Crime / Drama"
            country="USA"
            year="1957"
            img="https://moviesapi.ir/images/tt0050083_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="Schindler's List"
            Plot="In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
            genres="Biography / Drama / History"
            country="USA"
            year="1993"
            img="https://moviesapi.ir/images/tt0108052_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="Pulp Fiction"
            Plot="The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
            genres="Crime / Drama"
            country="USA"
            year="1994"
            img="https://moviesapi.ir/images/tt0110912_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="The Lord of the Rings: The Return of the King"
            Plot="Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
            genres="Adventure / Drama / Fantasy"
            country="USA"
            year="2003"
            img="https://moviesapi.ir/images/tt0167260_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="The Good, the Bad and the Ugly"
            Plot="A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."
            genres="Western"
            country="Italy"
            year="1966"
            img="https://moviesapi.ir/images/tt0060196_poster.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <MovieRotate
            title="Fight Club"
            Plot="An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more."
            genres="Drama"
            country="USA / Germany"
            year="1999"
            img="https://moviesapi.ir/images/tt0137523_poster.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MoveisPop;
