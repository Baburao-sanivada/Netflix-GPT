import React from "react";
import { MovieCard } from "./MovieCard";
import Slider from "react-slick";
import Shimmer from "./Shimmer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({ title, movies }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 7,
    initialSlide: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (!movies) return <Shimmer />;
  return (
    <div className="mb-4 md:mb-8">
      <h1 className="text-2xl pt-4 pb-2 font-medium">{title}</h1>
      <Slider {...settings} className="w-full">
        {movies.map(
          (movie) =>
            movie.poster_path && (
              <MovieCard key={movie.id} data={movie} className="ml-0" />
            )
        )}
      </Slider>
    </div>
  );
};

export default MovieList;
