import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Features.css'
import {images} from '../constants/images';
import { motion } from 'framer-motion';


function Features() {

    // Delay represents time on each card 
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay({delay: 5000})])

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    useEffect(() => {
        if (!emblaApi) return

        setScrollSnaps(emblaApi.scrollSnapList())
        setSelectedIndex(emblaApi.selectedScrollSnap())

        emblaApi.on('select', () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        })
    }, [emblaApi])

    // Used for animating parent component
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                // Timing between each card
                staggerChildren: 0.25, 
            },
        },
    };

    // Used to animate children component
    const item = {
        hidden: { opacity: 0, scale: 0.6 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 16 } },
    };


  return (
    <div id='features' className='pb-[100px] bg-gray-200'>
        <div className='pt-[75px]' />
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.4 }}
        >   
            <p className='font-bold text-3xl ml-[300px] mb-[16px]'>Features</p>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, scale: 0.96}}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ 
                type: "spring", 
                stiffness: 120,
                damping: 12,
                duration: 1.6,
                delay: 0.3,
            }}
        >
            {/* Features Carousel */}
            <div className="flex justify-center items-center ">
                
                <div className=" rounded-3xl w-[60%] h-[400px] px-8 shadow-2xl shadow-black/50 bg-white">
                    
                    <div className="embla w-full h-full" ref={emblaRef}>
                    <div className="embla__container">

                        <div className="embla__slide flex justify-center items-center">
                            <p className='font-semibold text-3xl'>Sleek homepage for every blog</p>
                            <img src={images.intro_1} alt="homepage" className='relative scale-200 top-[200px]'/>
                        </div> 
                        
                        <div className="embla__slide justify-center items-center">
                            <div className=''>
                                <p className='font-semibold text-3xl text-center mt-8'>Easily create posts and add images!</p>
                            </div>
                            <div className=''>
                                <img src={images.intro_2} alt="homepage" className='relative scale-140 left-[150px] top-[100px]'/>
                            </div>
                        </div>

                        <div className="embla__slide flex justify-center items-center">
                            <img src={images.intro_3} alt="homepage" className='relative scale-180 top-[150px]'/>
                            <p className='font-semibold text-3xl'>Comprehensive search to find any blog</p>
                        </div>


                    </div>
                    </div>
                </div>
            </div>
        </motion.div>

            {/* Carousel progress bar + index tab  */}
            <div className='items-center justify-center flex gap-4'>

                {/* Progress bar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 160,
                        damping: 8,
                        delay: 0.6,
                        duration: 1.6,
                    }}
                >
                    <div className="relative mt-6 w-[100px] h-[6px] bg-gray-600 rounded-full shadow-2xl shadow-black/50 overflow-hidden">
                        {/* White background */}
                        <div className="absolute top-0 left-0 h-full w-full bg-white" />

                        {/* Moving black bar [matching carousel card duration] */}
                        <motion.div
                            key={selectedIndex}
                            className="absolute top-0 left-0 h-full bg-black rounded"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 5, ease: "linear" }}
                        />
                    </div>
                </motion.div>

                {/* Index tab */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9}}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ 
                        type: "spring", 
                        stiffness: 160,
                        damping: 8,
                        delay: 0.8,
                        duration: 1.6,
                    }}
                >
                    <div className="flex justify-center mt-6 gap-2 bg-gray-600 p-4 rounded-4xl shadow-2xl shadow-black/50">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`cursor-pointer w-3 h-3 rounded-full ${
                                    index === selectedIndex ? 'bg-black' : 'bg-gray-300'
                                }`}
                            />
                        ))}
                    </div>
                </motion.div>

            </div>

        {/* Icon cards of highlighted features */}
        <div>
            <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.6 }}
            >
                <p className='text-xl font-semibold text-center mt-[24px]'>Continous Updates</p>
            </motion.div>
            <p className='text-md font-light text-gray-600 text-center mt-[2px]'>Built using Expo so you always stay updated.</p>

            <div className='flex justify-center items-center mt-[12px]'>
                <motion.div
                    className="w-[60%] grid grid-cols-3 gap-4"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    >
                    <motion.div variants={item}>
                        <div className="flex-1 bg-white rounded-2xl text-center h-[200px] shadow-2xl py-[24px] px-[12px]">
                        <center><img src={images.refresh} alt="refresh" width={60} height={60}/></center>
                        <p className="text-gray-600 mt-[16px]">
                            <span className="font-bold text-black">Auto refresh. </span>
                            Homepage and all blog details auto refresh so you always see the most recent data.
                        </p>
                        </div>
                    </motion.div>

                    <motion.div variants={item}>
                        <div className="flex-1 bg-white rounded-2xl text-center h-[200px] shadow-2xl py-[24px] px-[12px]">
                        <center><img src={images.management} alt="management" width={60} height={60}/></center>
                        <p className="text-gray-600 mt-[16px]">
                            <span className="font-bold text-black">Management. </span>
                            Improved blog management so you can edit, delete and report easily.
                        </p>
                        </div>
                    </motion.div>

                    <motion.div variants={item}>
                        <div className="flex-1 bg-white rounded-2xl text-center h-[200px] shadow-2xl py-[24px] px-[12px]">
                        <center><img src={images.dynamic} alt="dynamic" width={60} height={60}/></center>
                        <p className="text-gray-600 mt-[16px]">
                            <span className="font-bold text-black">Dynamic. </span>
                            Redesigned components to be more dynamic and responsive, without compromising efficiency.
                        </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Features