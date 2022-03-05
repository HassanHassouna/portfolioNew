import React from "react"
import "./testimonials.css"
import data from "./data"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from people</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
     
      >
        {data.map(({ id, name, review, avatar }) => {
          return (
            <SwiperSlide key={id} className="testemonials">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="name">{name}</h5>
              <small className="review">{review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
export default Testimonials
