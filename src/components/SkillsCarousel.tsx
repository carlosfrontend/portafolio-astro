// Import Swiper React components
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { type JSX } from "react";
import Logo from "./Logo";

// Import Swiper styles
import 'swiper/css';
import { SKILLS_LOGOS } from '../constants/SkillsLogos';

const SkillsCarousel: React.FC = (): JSX.Element => {

    return (
        <Swiper
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            speed={3000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            style={{ width: '100%', margin: '80px auto' }}
        >
            {
                SKILLS_LOGOS.map((logo) => (
                    <>
                        <SwiperSlide key={logo.id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'auto' }}>
                            <Logo id={`#${logo.id}`} title={logo.title} className='size-12 md:size-18' />
                        </SwiperSlide>
                        <SwiperSlide key={`${logo.id}2`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                            <Logo id={`#${logo.id}2`} title={logo.title} className='size-12 md:size-18' />
                        </SwiperSlide>
                    </>
                ))
            }


        </Swiper >
    );
}


export default SkillsCarousel