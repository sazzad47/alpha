import React from "react";
import Image from "next/legacy/image";
import user from "../../public/user.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from "swiper";

const Reviews = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-3 md:px-5 py-[10rem] md:py-[5rem] bg-gray-800 w-full">
        <div className="board min-w-full">
          <h1 className="text-slate-50 text-4xl font-bold uppercase p-3 mt-1 md:mt-0">Reviews from our verified users</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 2000 }}
          >
            {items.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Banner item={item} />{" "}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

type Item = {
  Name: string;
  Position: string;
  Comments: string;
  Image: string;
};

interface BannerProps {
  item: Item;
}

const Banner = (props: BannerProps) => {
  return (
    <div className="flex">
      <div className="comments">
        Animi sunt, ipsa error? Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Non, placeat quisquam? dignissimos est sit reiciendis
        iste
      </div>
      <div className="profile">
        <div className="img">
          <Image
            src={props.item.Image}
            layout="fill"
            objectFit="contain"
            alt=""
          />
        </div>
        <a href="#"> {props.item.Name}</a>
        <span>{props.item.Position}</span>
      </div>
    </div>
  );
};

const items: Item[] = [
  {
    Name: "Sazzad Hossen",
    Position: "Web Developer",
    Comments:
      "Animi sunt, ipsa error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.Non, placeat quisquam? dignissimos est sit reiciendis iste",
    Image: user.src,
  },
  {
    Name: "Amir Khan",
    Position: "Project Manager",
    Comments:
      "Animi sunt, ipsa error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.Non, placeat quisquam? dignissimos est sit reiciendis iste",
    Image: user.src,
  },
  {
    Name: "Moin Ali",
    Position: "Founder & CEO",
    Comments:
      "Animi sunt, ipsa error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.Non, placeat quisquam? dignissimos est sit reiciendis iste",
    Image: user.src,
  },
];

export default Reviews;
