import styled from "styled-components";
import Slider from "react-slick";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Autoplay } from "swiper";

const BRANDS = [
  {
    id: 1,
    image: "/images/home-slider-images/airbnb.svg",
    height: 170,
  },
  {
    id: 2,
    image: "/images/home-slider-images/angrybirds.svg",
  },
  {
    id: 3,
    image: "/images/home-slider-images/Combinator.svg",
  },
  {
    id: 4,
    image: "/images/home-slider-images/coveusi.svg",
  },
  {
    id: 5,
    image: "/images/home-slider-images/energy.svg",
  },
  {
    id: 6,
    image: "/images/home-slider-images/google.svg",
    height: 140,
  },
  {
    id: 7,
    image: "/images/home-slider-images/gsma.svg",
    height: 100,
  },
  {
    id: 8,
    image: "/images/home-slider-images/hipmunk.svg",
    height: 170,
  },
  {
    id: 9,
    image: "/images/home-slider-images/indinero.svg",
  },
  {
    id: 10,
    image: "/images/home-slider-images/nih.svg",
    height: 90,
    width: 102,
  },
  {
    id: 11,
    image: "/images/home-slider-images/noaa.svg",
    height: 90,
    width: 90,
  },
  {
    id: 12,
    image: "/images/home-slider-images/payscale.svg",
    height: 170,
  },
  {
    id: 13,
    image: "/images/home-slider-images/reddit.svg",
    height: 150,
  },
  {
    id: 14,
    image: "/images/home-slider-images/usc.svg",
    height: 120,
  },
  {
    id: 15,
    image: "/images/home-slider-images/usda.svg",
    height: 80,
    width: 117,
  },
  {
    id: 16,
    image: "/images/home-slider-images/visually.svg",
    height: 180,
  },
];

const Brands = () => {
  const settings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10,
    speed: 3000,
    pauseOnHover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };
  return (
    <Root>
      <div className="flex justify-center pt-10 desktop_container">
        <h2 className="h2">Organizations We’ve Supported</h2>
      </div>

      <div className="py-10">
        <Swiper
        className="swiper_height"
          style={{ padding: "0rem 4rem" }}
          slidesPerView={"auto"}
          // breakpoints={{
          //   "@0.00": {
          //     slidesPerView: 3,
          //     spaceBetween: 0,
          //   },
          //   "@0.75": {
          //     slidesPerView: 3,
          //     spaceBetween: 0,
          //   },
          //   "@1.00": {
          //     slidesPerView: 5,
          //     spaceBetween: 0,
          //   },
          //   "@1.50": {
          //     slidesPerView: 6,
          //     spaceBetween: 0,
          //   },
          // }}
          spaceBetween={0}
          freeMode={{
            enabled: true,
          }}
          // pagination={{
          //   clickable: true
          // }}
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            // pauseOnMouseEnter: true,
          }}
          speed={2000}
          modules={[FreeMode, Autoplay]}
          // className="mySwiper"
        >
          {BRANDS.map((s, ind) => {
            return (
              <SwiperSlide key={ind} style={{ width: (s.height || 220) * 1.2 }}>
                <BItem>
                  <div key={ind} className="brand_img relative flex items-center justify-center">
                    <img src={s.image} className="object-contain sm:max-w-full max-w-[80%]" alt="loading.." style={{ height: "auto" }} />
                  </div>
                </BItem>
              </SwiperSlide>

              // <SwiperSlide key={ind} style={{ height: "100%", width: "auto"}}>
              //   <BItem className="h-full">
              //     <div
              //       key={ind}
              //       className="brand_img relative flex items-center justify-center h-full"
              //     >
              //       <img
              //         src={s.image}
              //         className="object-contain"
              //         alt="loading.."
              //         style={{ height: "100%" }}
              //       />
              //     </div>
              //   </BItem>
              // </SwiperSlide>
            );
          })}

          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>

      {/* <Slider {...settings}>
        {BRANDS.map((s, ind) => {
          return (
            <div key={ind}>
              <div className="aspect-square relative justify-self-center mx-auto" style={{ height: s.height || 220 }}>
                <img src={s.image} className="w-full h-full" alt="loding.." />
              </div>
            </div>
          );
        })}
      </Slider> */}
      {/* <Marquee speed={100} gradient={false}> */}
      {/* <div className="flex gap-20 md:pb-10 py-0 mr-20 items-center">
          {BRANDS.map((s, ind) => {
            return (
              <div key={ind} className="brand_img aspect-square relative" style={{ height: s.height || 220 }}>
                <img src={s.image} className="h-full w-full object-contain" alt="loding.." />
              </div>
            );
          })}
        </div> */}
      {/* </Marquee> */}
    </Root>
  );
};

export default Brands;

const Root = styled.section`
  .h2 {
    color: var(--lightBlack);
    font-weight: 900;
  }
  .slick-track {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .swiper-wrapper {
    transition-timing-function: linear;
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    margin-right: 3rem;
  }
`;
const BItem = styled.div`
  /* margin-right: 2rem; */
`;
