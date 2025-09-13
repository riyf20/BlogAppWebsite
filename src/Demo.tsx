import { images } from '../constants/images'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion';


function Demo() {

  // Used for animating parent component
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
          // Timing between each card
          staggerChildren: 0.3, 
        },
    },
    };

  // Used to animate children component
  const item: Variants = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { 
      opacity: 1,
      scale: 1, 
      transition: { 
        duration: 1.4,
        type: "spring", 
        stiffness: 120, 
        damping: 16 
      }
    },
  };

  return (
    <div id='demo' className='bg-gray-200 pt-[75px] pb-[100px] justify-center items-center flex flex-col'>

        <div className='text-center'>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.4 }}
          >
            <p className='mt-[20px] font-bold text-3xl'>Try for yourself now!</p>
          </motion.div>
            <p className='mt-[6px] text-xl'>Scan the QR code to launch the demo version within expo.</p>
            <p className='mb-[20px] mt-[6px] text-md text-gray-500'>Compatible no matter the OS or phone size.</p>
        </div>

        <motion.div
          className='bg-white shadow-2xl shadow-black/30 rounded-3xl pt-5 pb-5 w-[60%] flex flex-row'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.6 }}
        >
            <motion.div 
              className='flex-1 flex-row items-center justify-center flex'
              variants={item}
            >
              <img src={images.iphone1} alt="iphone1" width={150} height={150} className='relative'/>
            </motion.div>
            
            <motion.div
              variants={item}
            >
              <img src={images.expoCode} alt="expoCode" width={200} height={200} className='flex-row'/>
            </motion.div>

            <motion.div 
              className='flex-1 flex-row items-center justify-center flex'
              variants={item} 
            >
              <img src={images.samsung1} alt="samsung1" width={260} height={260} className='relative'/>
            </motion.div>
          
        </motion.div>
        
        <p className='mt-[48px] font-bold text-3xl mb-[10px]'>FAQ</p>
        <Accordion
          type="single"
          collapsible
          className="w-[60%] bg-white shadow-2xl shadow-black/30 p-2 rounded-2xl cursor-pointer"
        >
          <AccordionItem value="item-0" className='ml-4'>
            <AccordionTrigger className='mr-4 cursor-pointer'>How do I demo the app using the QR code?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className='ml-3'>
                As the app is built using Expo users are able to preview the latest version using the Expo Go app.
                This will require you to have the app installed on your phone and be logged into your Expo account.
                After those prerequisites are met you can simply scan the code and the app will automatically launch 
                within the Expo Go application.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-1" className='ml-4'>
            <AccordionTrigger className='mr-4 cursor-pointer'>How is this different from the blog website?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className='ml-3'>
                The blog app is designed specifically for mobile use. Unlike the website, every page, button, and interaction is optimized for smaller screens, 
                making navigation smoother and more efficient on handheld devices. While both the app and website share the same data and core features, 
                the app provides a more native, on-the-go experience tailored for mobile users.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className='ml-4'>
            <AccordionTrigger className='mr-4 cursor-pointer'>Will my previous login from the website work?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className='ml-3'>
                Yes. Your existing account, along with your blogs and comments is shared between the website and the app.
                You can log in with the same credentials, and your data stays synced across both platform in real time.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className='ml-4'>
            <AccordionTrigger className='mr-4 cursor-pointer'>Can I write and publish blogs from the app?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className='ml-3'>
                Yes. The app lets you create, edit, and publish blogs just like the website. It's optimized for mobile, 
                so adding images, editing text, and managing posts feel more natural on a smaller screen.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className='ml-4'>
            <AccordionTrigger className='mr-4 cursor-pointer'>Is the app faster than the website?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className='ml-3'>
                The app is built with mobile performance in mind. It uses native navigation patterns, smoother animations,
                and on-device storage to make browsing blogs quicker and more fluid than viewing the website version on mobile.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className='ml-4'>
            <AccordionTrigger className='mr-4 cursor-pointer'>Can I download the app to my phone?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p className='ml-3'>
                The app is not yet available on the App Store or Google Play. However, you can stil try out the latest version using the demo 
                code provided above. While this requires an extra step it gives you access to the most up-tp-date version of the app.
                If you would like constant access and the oppurtunity to join the beta team. please reach out through the contact form.
              </p>
            </AccordionContent>
          </AccordionItem>

          
        </Accordion>
    </div>
  )
}

export default Demo