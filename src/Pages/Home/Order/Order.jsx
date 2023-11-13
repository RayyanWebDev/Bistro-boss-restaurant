import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Order = () => {
  return (
    <div>
      <h2 className="order-text font-medium text-center italic text-lg">
        ---From 11:00am to 10:00pm---
      </h2>{" "}
      <br />
      <hr className="border-2 border-solid w-96  mx-auto" />
      <br />
      <h3 className="text-center text-4xl">ORDER ONLINE</h3>
      <br />
      <hr className="border-2 border-solid w-96  mx-auto " />
      <br />
      <br />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide className="mb-14">
          <img src="https://i.ibb.co/dGWG3vj/slide1.jpg" alt="" />
          <img
            className="mx-auto relative bottom-16"
            src="https://i.ibb.co/YNwRWh3/Group-8.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/HY07cf8/slide2.jpg" alt="" />
          <img
            className="mx-auto relative bottom-16"
            src="https://i.ibb.co/WzSbfBF/Group-9.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Zz4zYQ1/slide3.jpg" alt="" />
          <img
            className="mx-auto relative bottom-16"
            src="https://i.ibb.co/qxKhsBC/Group-10.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/G9TrCdW/slide4.jpg" alt="" />
          <img
            className="mx-auto relative bottom-16"
            src="https://i.ibb.co/yhbVXLm/Group-11.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/dGWG3vj/slide1.jpg" alt="" />
          <img
            className="mx-auto relative bottom-16"
            src="https://i.ibb.co/yhbVXLm/Group-11.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Order;
