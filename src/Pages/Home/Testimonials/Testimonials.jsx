import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Rating } from '@smastrom/react-rating';


const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='w-11/12 md:max-w-5xl mx-auto'>
            <SectionTitle heading="TESTIMONIALS" subHeading="What Our Clients Say"></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide className='' key={review._id}>

                        <div className='text-center w-4/6 mx-auto flex flex-col space-y-5 mb-8 items-center'>
                            <Rating
                                className='max-w-32 flex self-center'
                                value={review.rating}
                                readOnly
                            ></Rating>

                            <p className='text-sm'>{review.details}</p>
                            <h3 className='font-semibold text-2xl'>{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;