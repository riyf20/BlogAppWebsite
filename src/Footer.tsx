import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import {images} from '../constants/images';

function Footer() {
  return (
    <div className='pb-[75px] bg-gray-200'>

        <p className='text-center text-2xl mb-4 font-bold'>My Links</p>
        <div className='flex flex-col justify-center items-center'>
            <hr className='h-1 bg-black w-[80%]'/>
        
        <div className='pt-4 flex w-[60%]'>

            <a href='https://rf-blogs.vercel.app/' target='_blank' rel='noopener noreferrer' 
                className="bg-white w-fit p-3 shadow-2xl shadow-black/30 rounded-3xl gap-2 flex mr-auto hover:scale-[1.1] ease-in transition-[0.6s] cursor-pointer"
            >
                <img src={images.blogWebsiteLogo} alt="logo" width={28} height={28}/>
                <p className='text-lg align-middle self-center'>Blog Website</p>
            </a>

            <a href='https://riyan-fardin.vercel.app/' target='_blank' rel='noopener noreferrer' 
                className="bg-white w-fit p-3 shadow-2xl shadow-black/30 rounded-3xl gap-2 flex self-center hover:scale-[1.1] ease-in transition-[0.6s] cursor-pointer"
            >
                <img src={images.portfolio} alt="logo" width={26} className='scale-[0.9]' />
                <p className='text-lg align-middle self-center'>Portfolio</p>
            </a>
            
            <div className="bg-white w-fit p-3 shadow-2xl shadow-black/30 rounded-3xl gap-2 flex ml-auto">
                <p className='text-lg align-middle self-center'>My Socials:</p>
                <div className='hover:scale-[1.3] ease-in transition-[0.6s]'>
                    <a href='https://linkedin.com/in/riyan-fardin' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} size='xl' />
                    </a>                      </div>
                <div className='hover:scale-[1.3] ease-in transition-[0.6s]'>
                    <a href='https://github.com/riyf20/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} size='xl' />
                    </a>                    
                </div>
                
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer