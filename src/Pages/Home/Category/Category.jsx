import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className=' my-10'>
            <SectionTitle
                subHeading={'From 11:00am to 10:00pm'}
                heading={'ORDER ONLINE'}
            ></SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className='text-center text-xl text-white  relative bottom-10'>SALADS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className='text-center text-xl text-white  relative bottom-10'>SOUPS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className='text-center text-xl text-white  relative bottom-10'>PIZZAS</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className='text-center text-xl text-white  relative bottom-10'>DESSERTS</h4>
                </SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" />
                    <h4 className='text-center text-xl text-white  relative bottom-10'></h4></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Category;