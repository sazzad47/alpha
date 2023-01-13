import Image from "next/image";
import React from "react";
import { Button, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import { IoNewspaper } from "react-icons/io5";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsCalendar2Event } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const coverPhotos = [
  {
    id: 1,
    url: "/shopping4.jpg",
  },
  {
    id: 2,
    url: "/shopping5.jpg",
  },
  {
    id: 3,
    url: "/shopping3.jpg",
  },
  {
    id: 4,
    url: "/shopping6.jpg",
  },
];
const Hero = () => {
  return (
    <React.Fragment>
      <div className="text-white w-full flex flex-col">
        <div className="w-full max-w-full h-[40vh] md:h-[50vh] relative">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            draggable
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 3000 }}
            className="w-full h-full max-w-full"
          >
            {coverPhotos.map((photo, i) => (
              <SwiperSlide key={i}>
                <Image src={photo.url} alt="" fill /> 
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
      </div>
    </React.Fragment>
  );
};

interface Props {
  children: string;
}
const ReadMore = ({ children }: Props) => {
  const text = children;

  return (
    <p className="pl-0 inline w-full">
      {text.slice(0, 50)}
      <span className="opacity-[0.7] text-white cursor-pointer">
        ...Read more
      </span>
    </p>
  );
};
export default Hero;
