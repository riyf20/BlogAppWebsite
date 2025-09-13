import {images} from '../constants/images';
import { motion } from "framer-motion";

function Intro() {
  return (
    <div id='intro' className="font-sans flex flex-col items-center justify-center mt-[100px]">

      <div className="text-center flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        > 
          <p className='text-5xl font-bold'>All new blogs app</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 , delay: 0.2}}
        > 
          <p className='text-2xl font-bold'>Your favorite blogs in the palm of your hands</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{ duration: 1 , delay: 1.2}}
        > 
          <p className='text-lg font-light text-gray-600'>Demo Available Now</p>
        </motion.div>

      </div>


      <div className='h-[100px] mt-[20px]'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 1}}
        > 
          <img src={images.intro_1} alt="intro1" className='relative scale-170 top-[120px] z-10' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 1}}
        > 
          <img src={images.intro_2} alt="intro2" className='relative scale-150 top-[-200px] right-[250px]'/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 1}}
        > 
          <img src={images.intro_3} alt="intro3" className='relative scale-150 top-[-520px] left-[250px]'/>
          </motion.div>

      </div>

    </div>
  )
}

export default Intro