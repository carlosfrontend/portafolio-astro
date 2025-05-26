import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import type { JSX } from 'astro/jsx-runtime'

const SkillsCarousel: React.FC = (): JSX.Element => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    }, [

        AutoScroll({ speed: 2, })
    ])

    useEffect(() => {
        if (emblaApi) {
            // console.log(emblaApi.slideNodes()) /
        }
    }, [emblaApi])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="carousel embla  rounded-box w-80 overflow-hidden" ref={emblaRef}>
                <div className='embla_container flex  grow-0 shrink-0 basis-100'>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                        className="embla_slide object-fit object-cover w-full"
                        alt="Tailwind CSS Carousel component" />


                    <img
                        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                        className="embla_slide object-fit object-cover w-full"
                        alt="Tailwind CSS Carousel component" />


                    <img
                        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                        className="embla_slide object-fit object-cover w-full"
                        alt="Tailwind CSS Carousel component" />



                </div>

            </div >
        </div>
    )
}


export default SkillsCarousel