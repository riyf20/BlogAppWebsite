import { useEffect, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'


function Navbar() {

  // Traack if the user has scrolled down
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full flex justify-center items-center fixed top-0 left-0 right-0 z-50">
      
        <div
        className={`w-[80%] justify-center mx-6 md:mx-28 mt-5 px-6 py-3 rounded-full transition-colors duration-300 backdrop-blur-md 
            ${!scrolled 
            ? "bg-[#008B8B]/60 shadow-2xl" 
            : "bg-[#2F4858]/70 shadow-2xl"
            }`}
        >
        <ul className="flex justify-around items-center gap-6 font-medium text-xl text-white">
            <li><AnchorLink offset={100} href="#intro">Home</AnchorLink></li>
            <li><AnchorLink offset={20} href="#features">Features</AnchorLink></li>
            <li><AnchorLink href="#demo">Demo</AnchorLink></li>
            <li><AnchorLink offset={30} href="#contact">Contact</AnchorLink></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar